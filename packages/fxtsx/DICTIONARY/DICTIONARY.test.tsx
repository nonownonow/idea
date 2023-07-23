import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { DICTIONARY } from "./DICTIONARY";
import { anyPropsWithRootProps, fxtsxTest } from "fxtsx/FxTsx/FxTsx.test";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <DICTIONARY {...anyPropsWithRootProps}>Root</DICTIONARY>
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
          id="my-id"
          style="font-size: 1rem;"
          tabindex="0"
        >
          Root
        </div>
      </DocumentFragment>
    `);
  });
});
fxtsxTest(DICTIONARY, "data-fx-dictionary");

