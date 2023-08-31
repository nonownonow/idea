import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { DdProps } from "fxtsx-html/Value/P/P";
import { Default } from "fxtsx-html/Value/Dd/Dd.stories";
import { Dd } from "fxtsx-html/Value/Dd/Dd";

describe("구조", () => {
  let renderResult: RenderResult;
  const callBack = {};
  beforeEach(() => {
    renderResult = render(<Dd {...callBack} {...(Default.args as DdProps)} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <dd
          data-fx-value="true"
        >
          PROGRAMMER
        </dd>
      </DocumentFragment>
    `);
  });
});
