import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { TextField } from "fxtsx-html/input/TextField/TextField";
import { Default } from "fxtsx-html/input/TextField/TextField.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<TextField {...Default.args} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-key="키"
        >
          <label
            data-fx-key="true"
            for="키"
          >
            이름
          </label>
          <div
            data-fx-value="true"
          >
            <input
              id="키"
              type="text"
            />
          </div>
          <div
            data-error="true"
          >
            error
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
