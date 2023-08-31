import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { DdProps } from "fxtsx-html/Value/P/P";
import { P } from "fxtsx-html/Value/P/P";
import { Default } from "fxtsx-html/Value/P/P.stories";

describe("구조", () => {
  let renderResult: RenderResult;
  const callBack = {};
  beforeEach(() => {
    renderResult = render(<P {...callBack} {...(Default.args as DdProps)} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <p
          data-fx-value="true"
        >
          PROGRAMMER
        </p>
      </DocumentFragment>
    `);
  });
});
