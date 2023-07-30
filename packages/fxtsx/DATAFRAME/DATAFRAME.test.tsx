import type { RenderResult } from "@testing-library/react";
import {
  getAllByTestId,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import { DATAFRAME } from "./DATAFRAME";
import { LIST } from "fxtsx/LIST/LIST";
import { Component } from "fxtsx/util/util";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";

describe("DATAFRAME", () => {
  let renderResult: RenderResult;
  /*  beforeEach(() => {
    renderResult = render(<DATAFRAME {...Default.args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-dataframe="true"
          data-testid="List"
        >
          <div
            data-testid="Element"
          >
            <div
              data-testid="Dictionary"
            >
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  a
                </div>
                <div
                  data-testid="Value"
                >
                  1
                </div>
              </div>
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  b
                </div>
                <div
                  data-testid="Value"
                >
                  2
                </div>
              </div>
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  c
                </div>
                <div
                  data-testid="Value"
                >
                  3
                </div>
              </div>
            </div>
          </div>
          <div
            data-testid="Element"
          >
            <div
              data-testid="Dictionary"
            >
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  a
                </div>
                <div
                  data-testid="Value"
                >
                  11
                </div>
              </div>
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  b
                </div>
                <div
                  data-testid="Value"
                >
                  22
                </div>
              </div>
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  c
                </div>
                <div
                  data-testid="Value"
                >
                  33
                </div>
              </div>
            </div>
          </div>
          <div
            data-testid="Element"
          >
            <div
              data-testid="Dictionary"
            >
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  a
                </div>
                <div
                  data-testid="Value"
                >
                  111
                </div>
              </div>
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  b
                </div>
                <div
                  data-testid="Value"
                >
                  222
                </div>
              </div>
              <div
                data-testid="Entry"
              >
                <div
                  data-testid="Key"
                >
                  c
                </div>
                <div
                  data-testid="Value"
                >
                  333
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });*/
  // fxtsxTest(DATAFRAME, "data-fx-dataframe");

  /*  test("루트는 Dataframe 콜백으로 랜더링한다", () => {
    expect(screen.getByTestId("Dataframe")).toHaveAttribute(
      "data-fx-dataframe"
    );
  });*/
  describe("객체 배열을 data 프로퍼티로 받아서", () => {
    const data = [
      { a: 1, b: 2 },
      { a: 11, b: 22 },
    ];
    beforeEach(() => {
      const List = (props: any) => (
        <LIST
          {...props}
          List={Component("List")}
          Entry={Component("Element")}
        />
      );
      const Dictionary = (props: any) => (
        <DICTIONARY
          Dictionary={Component("Dictionary")}
          Entry={Component("Entry")}
          Key={Component("Key")}
          Value={Component("Value")}
          {...props}
        />
      );

      renderResult = render(
        <DATAFRAME data={data} List={List} Dictionary={Dictionary} />
      );
    });
    test("렌더링", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-dataframe="true"
            data-fx-list="true"
            data-testid="List"
          >
            <div
              data-testid="Element"
              index="0"
              value="[object Object]"
            >
              <div
                data-fx-dictionary="true"
                data-fx-list="true"
                data-testid="Dictionary"
              >
                <div
                  data-testid="Entry"
                >
                  <div
                    data-testid="Key"
                  >
                    a
                  </div>
                  <div
                    data-testid="Value"
                  >
                    1
                  </div>
                </div>
                <div
                  data-testid="Entry"
                >
                  <div
                    data-testid="Key"
                  >
                    b
                  </div>
                  <div
                    data-testid="Value"
                  >
                    2
                  </div>
                </div>
              </div>
            </div>
            <div
              data-testid="Element"
              index="1"
              value="[object Object]"
            >
              <div
                data-fx-dictionary="true"
                data-fx-list="true"
                data-testid="Dictionary"
              >
                <div
                  data-testid="Entry"
                >
                  <div
                    data-testid="Key"
                  >
                    a
                  </div>
                  <div
                    data-testid="Value"
                  >
                    11
                  </div>
                </div>
                <div
                  data-testid="Entry"
                >
                  <div
                    data-testid="Key"
                  >
                    b
                  </div>
                  <div
                    data-testid="Value"
                  >
                    22
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DocumentFragment>
      `);
    });
    let firstElement: any;
    beforeEach(() => {
      firstElement = screen.getAllByTestId("Element")[0];
    });
    test("배열은 List 컴포넌트로 랜더링한다", () => {
      expect(screen.getByTestId("List")).toHaveTextContent("a1b2a11b22");
    });
    test("배열의 요소는 Element 컴포넌트로 랜더링한다", () => {
      expect(firstElement).toHaveTextContent("a1b2");
    });
    describe("배열의 요소", () => {
      test("객체는 Dictionary 컴포넌트로 랜더링한다", () => {
        expect(getByTestId(firstElement, "Dictionary")).toHaveTextContent(
          "a1b2"
        );
      });
      test("객체의 요소는 Entry 컴포넌트로 랜더링한다", () => {
        expect(getAllByTestId(firstElement, "Entry")[0]).toHaveTextContent(
          "a1"
        );
      });
      test("객체의 키는 Key 컴포넌트로 랜더링한다", () => {
        expect(getAllByTestId(firstElement, "Key")[0]).toHaveTextContent("a");
      });
      test("객체의 값은 Value 컴포넌트로 랜더링한다", () => {
        expect(getAllByTestId(firstElement, "Value")[0]).toHaveTextContent("1");
      });
    });
  });
});
