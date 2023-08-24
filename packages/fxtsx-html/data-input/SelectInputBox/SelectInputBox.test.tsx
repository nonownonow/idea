import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { SelectInputBox } from "fxtsx-html/data-input/SelectInputBox/SelectInputBox";
import { Default } from "fxtsx-html/data-input/SelectInputBox/SelectInputBox.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <SelectInputBox data-testid={"SelectInputBox"} {...Default.args} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-testid="SelectInputBox"
        />
      </DocumentFragment>
    `);
  });
});
