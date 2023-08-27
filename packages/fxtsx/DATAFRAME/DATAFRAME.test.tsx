import type { RenderResult } from "@testing-library/react";
import {
  getAllByTestId,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import type { DATAFRAMEProps } from "./DATAFRAME";
import { DATAFRAME } from "./DATAFRAME";
import { LIST } from "fxtsx/LIST/LIST";
import { Component } from "fxtsx/util/util";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import { Formatting } from "fxtsx/DATAFRAME/DATAFRAME.stories";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";

describe("DATAFRAME", () => {
  const List = (props: LIST<any>) => (
    <LIST {...props} List={Component("List")} Item={Component("Item")} />
  );
  const Entry = (props: ENTRY) => (
    <ENTRY Key={Component("Key")} Value={Component("Value")} {...props} />
  );
  const Dictionary = (props: DICTIONARY) => (
    <DICTIONARY List={List} Entry={Entry} {...props} />
  );
  let renderResult: RenderResult;
  describe("객체 배열을 data 프로퍼티로 받아서", () => {
    const args: DATAFRAMEProps<any> = {
      $data: [
        { a: 1, b: 2 },
        { a: 11, b: 22 },
      ],
    };
    beforeEach(() => {
      renderResult = render(
        <DATAFRAME $data={args.$data} List={List} Dictionary={Dictionary} />
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
              data-testid="Item"
            >
              <div
                data-fx-dictionary="true"
                data-fx-list="true"
                data-testid="List"
              >
                <div
                  data-testid="Item"
                >
                  <div
                    data-fx-entry="true"
                    data-key="a"
                  >
                    <div
                      data-fx-key="true"
                      data-testid="Key"
                    >
                      a
                    </div>
                    <div
                      data-fx-value="true"
                      data-testid="Value"
                      name="a"
                      value="1"
                    >
                      1
                    </div>
                  </div>
                </div>
                <div
                  data-testid="Item"
                >
                  <div
                    data-fx-entry="true"
                    data-key="b"
                  >
                    <div
                      data-fx-key="true"
                      data-testid="Key"
                    >
                      b
                    </div>
                    <div
                      data-fx-value="true"
                      data-testid="Value"
                      name="b"
                      value="2"
                    >
                      2
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-testid="Item"
            >
              <div
                data-fx-dictionary="true"
                data-fx-list="true"
                data-testid="List"
              >
                <div
                  data-testid="Item"
                >
                  <div
                    data-fx-entry="true"
                    data-key="a"
                  >
                    <div
                      data-fx-key="true"
                      data-testid="Key"
                    >
                      a
                    </div>
                    <div
                      data-fx-value="true"
                      data-testid="Value"
                      name="a"
                      value="11"
                    >
                      11
                    </div>
                  </div>
                </div>
                <div
                  data-testid="Item"
                >
                  <div
                    data-fx-entry="true"
                    data-key="b"
                  >
                    <div
                      data-fx-key="true"
                      data-testid="Key"
                    >
                      b
                    </div>
                    <div
                      data-fx-value="true"
                      data-testid="Value"
                      name="b"
                      value="22"
                    >
                      22
                    </div>
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
      firstElement = screen.getAllByTestId("Item")[0];
    });
    test("배열은 List 컴포넌트로 랜더링한다", () => {
      expect(screen.getAllByTestId("List")[0]).toHaveTextContent("a1b2a11b22");
    });
    test("배열의 요소는 Element 컴포넌트로 랜더링한다", () => {
      expect(firstElement).toHaveTextContent("a1b2");
    });
    describe("배열의 요소", () => {
      test("객체는 Dictionary 컴포넌트로 랜더링한다", () => {
        expect(getByTestId(firstElement, "List")).toHaveTextContent("a1b2");
      });
      test("객체의 요소는 Entry 컴포넌트로 랜더링한다", () => {
        expect(getAllByTestId(firstElement, "Item")[0]).toHaveTextContent("a1");
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
          $data={Formatting.args?.$data as any}
          $itemFormat={Formatting.args?.$itemFormat}
          List={List}
          Dictionary={Dictionary}
          $keyFormat={Formatting.args?.$keyFormat}
          $keyFormats={Formatting.args?.$keyFormats}
          $valueFormat={Formatting.args?.$valueFormat}
          $valueFormats={Formatting.args?.$valueFormats}
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
              data-testid="Item"
            >
              <a
                data-testid="anchor"
                href=""
              >
                <div
                  data-fx-dictionary="true"
                  data-fx-list="true"
                  data-testid="List"
                >
                  <div
                    data-testid="Item"
                  >
                    <div
                      data-fx-entry="true"
                      data-key="a 꾸미기"
                    >
                      <div
                        data-fx-key="true"
                        data-testid="Key"
                      >
                        a 꾸미기
                      </div>
                      <div
                        data-fx-value="true"
                        data-testid="Value"
                        name="a"
                        value="1"
                      >
                        꾸며진 1
                      </div>
                    </div>
                  </div>
                  <div
                    data-testid="Item"
                  >
                    <div
                      data-fx-entry="true"
                      data-key="b키 입니다"
                    >
                      <div
                        data-fx-key="true"
                        data-testid="Key"
                      >
                        b키 입니다
                      </div>
                      <div
                        data-fx-value="true"
                        data-testid="Value"
                        name="b"
                        value="2"
                      >
                        꾸며진 b값 2
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-testid="Item"
            >
              <a
                data-testid="anchor"
                href=""
              >
                <div
                  data-fx-dictionary="true"
                  data-fx-list="true"
                  data-testid="List"
                >
                  <div
                    data-testid="Item"
                  >
                    <div
                      data-fx-entry="true"
                      data-key="a 꾸미기"
                    >
                      <div
                        data-fx-key="true"
                        data-testid="Key"
                      >
                        a 꾸미기
                      </div>
                      <div
                        data-fx-value="true"
                        data-testid="Value"
                        name="a"
                        value="11"
                      >
                        꾸며진 11
                      </div>
                    </div>
                  </div>
                  <div
                    data-testid="Item"
                  >
                    <div
                      data-fx-entry="true"
                      data-key="b키 입니다"
                    >
                      <div
                        data-fx-key="true"
                        data-testid="Key"
                      >
                        b키 입니다
                      </div>
                      <div
                        data-fx-value="true"
                        data-testid="Value"
                        name="b"
                        value="22"
                      >
                        꾸며진 b값 22
                      </div>
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
      expect(screen.getAllByTestId("Item")[0]).toContainElement(anchor);
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
