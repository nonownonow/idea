import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Details } from "fxtsx-html/data-view/Details/Details";
import { Default } from "fxtsx-html/data-view/Details/Details.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <Details data-testid={"Details"} {...Default.args} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <details
          data-fx-details="true"
          data-testid="Details"
        >
          <summary>
            <span>
              Summary
            </span>
            <span
              data-details-open-mark="true"
            >
              [열기]
            </span>
            <span
              data-details-close-mark="true"
            >
              [닫기]
            </span>
          </summary>
          <div>
            Contents
          </div>
        </details>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    test("루트는 details 태그로 렌더링된다.", () => {
      expect(screen.getByTestId("Details").tagName).toEqual("DETAILS");
    });
    test("Summary 는 summary 태그로 렌더링된다", () => {
      expect(screen.getByText("Summary").parentElement?.tagName).toEqual(
        "SUMMARY"
      );
    });
  });
});
