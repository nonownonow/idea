import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { DICTIONARY } from "./DICTIONARY";
import { anyPropsWithRootProps } from "fxtsx/FxTsx/FxTsx.test";
import { Component } from "fxtsx/util/util";
import { createRef } from "react";

describe("랜더링", () => {
  let renderResult: RenderResult;
  const Dictionary = Component("Dictionary");
  const Entry = Component("Entry");
  const Key = Component("Key");
  const Value = Component("Value");
  const ref = createRef();
  const data = {
    keyA: "ValueA",
    keyB: "ValueB",
    keyC: "ValueC",
  };

  const keys = ["keyA", "keyB", "keyA"];
  beforeEach(() => {
    renderResult = render(
      <DICTIONARY
        {...anyPropsWithRootProps}
        Dictionary={Dictionary}
        Entry={Entry}
        Key={Key}
        Value={Value}
        data={data}
        keys={keys}
        ref={ref}
      >
        Root
      </DICTIONARY>
    );
  });
  test("object 타입의 데이터를 구조화하여 요구사항에 맞게 랜더링한다", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          any="my-any-props"
          class="my-class"
          data-fx-dictionary="true"
          data-fx-list="true"
          data-test="my-data-test"
          data-testid="Dictionary"
          id="my-id"
          style="font-size: 1rem;"
          tab-index="0"
        >
          <div
            data-testid="Entry"
          >
            <div
              data-testid="Key"
            >
              keyA
            </div>
            <div
              data-testid="Value"
            >
              ValueA
            </div>
          </div>
          <div
            data-testid="Entry"
          >
            <div
              data-testid="Key"
            >
              keyB
            </div>
            <div
              data-testid="Value"
            >
              ValueB
            </div>
          </div>
          <div
            data-testid="Entry"
          >
            <div
              data-testid="Key"
            >
              keyA
            </div>
            <div
              data-testid="Value"
            >
              ValueA
            </div>
          </div>
          Root
        </div>
      </DocumentFragment>
    `);
  });
  test("루트는 Dictionary 콜백으로 랜더링한다", () => {
    expect(screen.getByTestId("Dictionary")).toHaveTextContent("Root");
  });
  test("루트는 ref 를 받아서 랜더링한다", () => {
    expect(ref.current).toHaveTextContent("Root");
  });
  test("엔트리는 Entry 콜백으로 랜더링한다", () => {
    expect(screen.getAllByTestId("Entry")[0]).toHaveTextContent("keyAValueA");
  });
  test("키는 Key 콜백으로 랜더링한다", () => {
    expect(screen.getAllByTestId("Key")[0]).toHaveTextContent("keyA");
  });
  test("값은 Value 콜백으로 랜더링한다", () => {
    expect(screen.getAllByTestId("Value")[0]).toHaveTextContent("ValueA");
  });
  test("각 entry 는  keys 프로퍼티에 의해 순서와 표시여부가 결정된다.", () => {
    keys.forEach((v, i) => {
      expect(screen.getAllByTestId("Value")[i]).toHaveTextContent(
        data[v as keyof typeof data]
      );
      expect(screen.getAllByTestId("Value")[i]).not.toHaveTextContent("ValueC");
    });
  });
  test.todo("각 키는 keyFormat 프로퍼티로 포멧팅 된다.");
  test.todo("각 값은 valueFormat 프로퍼티로 포멧팅 된다.");
});
// fxtsxTest(DICTIONARY, "data-fx-dictionary");
