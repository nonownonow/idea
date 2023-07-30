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
import { Formatting } from "fxtsx/DATAFRAME/DATAFRAME.stories";

describe("DATAFRAME", () => {
  const List = (props: any) => (
    <LIST {...props} List={Component("List")} Entry={Component("Element")} />
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
  describe("꾸미기", () => {
    beforeEach(() => {
      renderResult = render(
        <DATAFRAME
          data={Formatting.args?.data}
          formatter={Formatting.args?.formatter}
          List={List}
          Dictionary={Dictionary}
          keyFormat={Formatting.args?.keyFormat}
          keyFormats={Formatting.args?.keyFormats}
          valueFormat={Formatting.args?.valueFormat}
          valueFormats={Formatting.args?.valueFormats}
        />
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
              <a
                data-testid="anchor"
                href=""
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
                      a 꾸미기
                    </div>
                    <div
                      data-testid="Value"
                    >
                      꾸며진 1
                    </div>
                  </div>
                  <div
                    data-testid="Entry"
                  >
                    <div
                      data-testid="Key"
                    >
                      b키 입니다
                    </div>
                    <div
                      data-testid="Value"
                    >
                      꾸며진 b값 2
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-testid="Element"
              index="1"
              value="[object Object]"
            >
              <a
                data-testid="anchor"
                href=""
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
                      a 꾸미기
                    </div>
                    <div
                      data-testid="Value"
                    >
                      꾸며진 11
                    </div>
                  </div>
                  <div
                    data-testid="Entry"
                  >
                    <div
                      data-testid="Key"
                    >
                      b키 입니다
                    </div>
                    <div
                      data-testid="Value"
                    >
                      꾸며진 b값 22
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </DocumentFragment>
      `);
    });
    test("formatter 프로퍼티로 객체를 꾸민다.", () => {
      const anchor = screen.getAllByTestId("anchor")[0];
      expect(screen.getAllByTestId("Element")[0]).toContainElement(anchor);
    });
    test("keyFormat 프로퍼티로 모든 키를 꾸민다", () => {
      expect(screen.getAllByTestId("Key")[0]).toHaveTextContent("a 꾸미기");
    });
    test("keyFormats 프로퍼티로 개별 키를 꾸민다.", () => {
      expect(screen.getAllByTestId("Key")[1]).toHaveTextContent("b키 입니다");
    });
    test("valueFormat 프로퍼티로 모든 값을 꾸민다", () => {
      expect(screen.getAllByTestId("Value")[0]).toHaveTextContent("꾸며진 1");
    });
    test("valueFormats 프로퍼티로 개별 값을 꾸민다", () => {
      expect(screen.getAllByTestId("Value")[1]).toHaveTextContent(
        "꾸며진 b값 2"
      );
    });
  });
});
