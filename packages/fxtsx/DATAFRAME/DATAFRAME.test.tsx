import type { RenderResult } from "@testing-library/react";
import { getAllByTestId, render, screen } from "@testing-library/react";
import type { DATAFRAMEProps } from "./DATAFRAME";
import { DATAFRAME } from "./DATAFRAME";
import { COLLECTION } from "fxtsx/COLLECTION/COLLECTION";
import { Component } from "fxtsx/util/util";
import { Formatting } from "fxtsx/DATAFRAME/DATAFRAME.stories";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";
import { DICTIONARY } from "fxtsx/DICTIONARY/DICTIONARY";
import type { DicData } from "fxtsx/fxtsx.type";

describe("DATAFRAME", () => {
  const List = (props: COLLECTION<any>) => (
    <COLLECTION {...props} Root={Component("List")} Item={Component("Item")} />
  );
  const Entry = (props: ENTRY) => (
    <ENTRY Key={Component("Key")} Value={Component("Value")} {...props} />
  );

  const Dictionary = (props: DICTIONARY<DicData>) => (
    <DICTIONARY Root={Component("Dictionary")} Entry={Entry} {...props} />
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
        <DATAFRAME $data={args.$data} Root={List} Dictionary={Dictionary} />
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
                data-testid="Dictionary"
              >
                <div
                  data-fx-entry="true"
                >
                  <div
                    data-key="a"
                    data-testid="Key"
                    label="a"
                  >
                    a
                  </div>
                  <div
                    data-testid="Value"
                    data-value="1"
                    value-label="1"
                  >
                    1
                  </div>
                </div>
                <div
                  data-fx-entry="true"
                >
                  <div
                    data-key="b"
                    data-testid="Key"
                    label="b"
                  >
                    b
                  </div>
                  <div
                    data-testid="Value"
                    data-value="2"
                    value-label="2"
                  >
                    2
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
                data-testid="Dictionary"
              >
                <div
                  data-fx-entry="true"
                >
                  <div
                    data-key="a"
                    data-testid="Key"
                    label="a"
                  >
                    a
                  </div>
                  <div
                    data-testid="Value"
                    data-value="11"
                    value-label="11"
                  >
                    11
                  </div>
                </div>
                <div
                  data-fx-entry="true"
                >
                  <div
                    data-key="b"
                    data-testid="Key"
                    label="b"
                  >
                    b
                  </div>
                  <div
                    data-testid="Value"
                    data-value="22"
                    value-label="22"
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
        expect(screen.getAllByTestId("Dictionary")[0]).toHaveTextContent(
          "a1b2"
        );
      });
      test.skip("객체의 요소는 Entry 컴포넌트로 랜더링한다", () => {
        expect(
          getAllByTestId(screen.getAllByTestId("Dictionary")[0], "Item")[0]
        ).toHaveTextContent("a1");
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
          Root={List}
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
                href="http://naver.com"
              >
                <div
                  data-fx-dictionary="true"
                  data-fx-list="true"
                  data-testid="Dictionary"
                >
                  <div
                    data-fx-entry="true"
                  >
                    <div
                      data-key="a"
                      data-testid="Key"
                      label="a 꾸미기"
                    >
                      a 꾸미기
                    </div>
                    <div
                      data-testid="Value"
                      data-value="1"
                      value-label="꾸며진 1"
                    >
                      꾸며진 1
                    </div>
                  </div>
                  <div
                    data-fx-entry="true"
                  >
                    <div
                      data-key="b"
                      data-testid="Key"
                      label="b키 입니다"
                    >
                      b키 입니다
                    </div>
                    <div
                      data-testid="Value"
                      data-value="2"
                      value-label="꾸며진 b값 2"
                    >
                      꾸며진 b값 2
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
                href="http://naver.com"
              >
                <div
                  data-fx-dictionary="true"
                  data-fx-list="true"
                  data-testid="Dictionary"
                >
                  <div
                    data-fx-entry="true"
                  >
                    <div
                      data-key="a"
                      data-testid="Key"
                      label="a 꾸미기"
                    >
                      a 꾸미기
                    </div>
                    <div
                      data-testid="Value"
                      data-value="11"
                      value-label="꾸며진 11"
                    >
                      꾸며진 11
                    </div>
                  </div>
                  <div
                    data-fx-entry="true"
                  >
                    <div
                      data-key="b"
                      data-testid="Key"
                      label="b키 입니다"
                    >
                      b키 입니다
                    </div>
                    <div
                      data-testid="Value"
                      data-value="22"
                      value-label="꾸며진 b값 22"
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
