import { HEADING } from "./HEADING";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { createRef } from "react";
import { WithChildren, WithoutChildren } from "fxtsx/HEADING/HEADING.stories";

describe("HEADING", () => {
  const ref = createRef<any>();
  let renderResult: RenderResult;

  describe("렌더링", () => {
    beforeEach(() => {
      renderResult = render(
        <HEADING {...(WithoutChildren.args as HEADING)} ref={ref} />
      );
    });
    test("children 이 없을 때", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-heading="true"
            data-testid="$Headline"
            level="1"
            title="제목"
          />
        </DocumentFragment>
      `);
    });
    test("children 이 있을 때", () => {
      const { asFragment, rerender } = renderResult;
      rerender(<HEADING {...(WithChildren.args as HEADING)} />);
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-testid="$HeadlineGroup"
          />
        </DocumentFragment>
      `);
    });

    test("subTitle 은 children 을 대체한다", () => {
      const { asFragment, rerender } = renderResult;
      rerender(
        <HEADING
          {...(WithChildren.args as HEADING)}
          subTitle={"부제목 from subTitle"}
        />
      );
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-testid="$HeadlineGroup"
          />
        </DocumentFragment>
      `);
    });
  });
});
