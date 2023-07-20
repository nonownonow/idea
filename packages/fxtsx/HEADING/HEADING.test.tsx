import { HEADING } from "./HEADING";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { createRef } from "react";
import { HEADING_Default, WithChildren } from "fxtsx/HEADING/HEADING.stories";

describe("HEADING", () => {
  const ref = createRef<any>();
  let renderResult: RenderResult;

  describe("렌더링", () => {
    beforeEach(() => {
      renderResult = render(<HEADING {...HEADING_Default.args} ref={ref} />);
    });
    test("children 이 없을 때", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-heading="true"
            data-testid="Headline"
            level="1"
            title="제목"
          />
        </DocumentFragment>
      `);
    });
    test("children 이 있을 때", () => {
      const { asFragment, rerender } = renderResult;
      rerender(<HEADING {...WithChildren.args} />);
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-heading="true"
            data-testid="HeadlineGroup"
          >
            <div
              data-testid="Headline"
              level="1"
              title="제목"
            />
            부제목
          </div>
        </DocumentFragment>
      `);
    });

    test("subTitle 은 children 을 대체한다", () => {
      const { asFragment, rerender } = renderResult;
      rerender(
        <HEADING
          {...(WithChildren.args as HEADING)}
          $subTitle={"부제목 from subTitle"}
        />
      );
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-heading="true"
            data-testid="HeadlineGroup"
          >
            <div
              data-testid="Headline"
              level="1"
              title="제목"
            />
            부제목 from subTitle
          </div>
        </DocumentFragment>
      `);
    });
  });
});
