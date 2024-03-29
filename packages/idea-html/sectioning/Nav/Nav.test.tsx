import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Nav } from "./Nav";
import { Default } from "packages/idea-html/sectioning/Nav/Nav.stories";

describe("Nav", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Nav {...Default.args} />);
  });
  test("랜더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <nav
          data-fx-sectioning="true"
        >
          <hundefined
            data-fx-heading="true"
            data-fx-value="true"
            data-heading-level="1"
          >
            nav 타이틀
          </hundefined>
        </nav>
      </DocumentFragment>
    `);
  });
});
