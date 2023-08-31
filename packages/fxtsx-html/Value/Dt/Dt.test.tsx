import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { DdProps } from "fxtsx-html/Value/P/P";
import { Default } from "fxtsx-html/Value/P/P.stories";
import { Dt } from "fxtsx-html/Value/Dt/Dt";

describe("구조", () => {
  let renderResult: RenderResult;
  const callBack = {};
  beforeEach(() => {
    renderResult = render(<Dt {...callBack} {...(Default.args as DdProps)} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <dt
          data-fx-value="true"
        >
          PROGRAMMER
        </dt>
      </DocumentFragment>
    `);
  });
});
