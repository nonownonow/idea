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
    keyA: "valueA",
    keyB: "valueB",
    keyC: "valueC",
  };
  beforeEach(() => {
    renderResult = render(
      <DICTIONARY
        {...anyPropsWithRootProps}
        Dictionary={Dictionary}
        Entry={Entry}
        Key={Key}
        Value={Value}
        data={data}
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
          data-test="my-data-test"
          data-testid="Dictionary"
          id="my-id"
          style="font-size: 1rem;"
          tab-index="0"
          value="[object Object]"
        >
          Root
        </div>
      </DocumentFragment>
    `);
  });
  test.skip("루트는 Dictionary 콜백으로 랜더링한다", () => {
    expect(screen.getByTestId("Dictionary")).toHaveTextContent("Root");
  });
  test.skip("루트는 ref 를 받아서 랜더링한다", () => {
    expect(ref.current).toHaveTextContent("Root");
  });
  test.skip("엔트리는 Entry 콜백으로 랜더링한다", () => {
    expect(screen.getByTestId("Entry")).queryAllByTextContent("KeyAValueA");
  });
  test.todo("키는 Key 콜백으로 랜더링한다");
  test.todo("값은 Value 콜백으로 랜더링한다");
});
// fxtsxTest(DICTIONARY, "data-fx-dictionary");
