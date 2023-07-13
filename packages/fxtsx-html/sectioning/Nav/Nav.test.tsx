import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Nav } from "./Nav";

describe("Nav", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Nav />);
  });
  test("랜더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div />
      </DocumentFragment>
    `);
  });
});
