import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { DATAFRAME } from "./DATAFRAME";

describe("DATAFRAME", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<DATAFRAME />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div />
      </DocumentFragment>
    `);
  });
});
