import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Nav } from "./Nav";

describe("Nav", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Nav title={"네비게이션 제목"} level={1} />);
  });
  test("랜더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <nav
          data-fx-sectioning="true"
        >
          <h1>
            네비게이션 제목
          </h1>
        </nav>
      </DocumentFragment>
    `);
  });
});
