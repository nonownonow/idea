import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { createRef } from "react";
import { VALUE } from "packages/idea/VALUE/VALUE";
import { Default } from "packages/idea/VALUE/VALUE.stories";
import { fxtsxTest } from "packages/idea/FxTsx/fxtsxTest";

describe("구조", () => {
  let renderResult: RenderResult;
  const ref = createRef();
  const callBack = {};
  let rootEl: ChildNode | null;
  beforeEach(() => {
    renderResult = render(
      <VALUE ref={ref} {...callBack} {...(Default.args as VALUE)} />
    );
    rootEl = renderResult.container.firstChild;
  });
  fxtsxTest(VALUE, "data-fx-value");
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          dangerously-set-inner-html="[object Object]"
          data-fx-value="true"
        />
      </DocumentFragment>
    `);
  });
  test("ref 는 루트 엘레멘트를 참조한다", () => {
    expect(ref.current).toEqual(rootEl);
  });
});
