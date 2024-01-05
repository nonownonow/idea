import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { FigureProps } from "packages/idea-html/data-view/Figure/Figure";
import { Figure } from "packages/idea-html/data-view/Figure/Figure";
import { Default } from "packages/idea-html/data-view/Figure/Figure.stories";

describe("렌더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Figure {...(Default.args as FigureProps)} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <figure
          id="elephant"
        >
          <img
            alt="An elephant at sunset"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
          />
          <figcaption>
            An elephant at sunset
          </figcaption>
        </figure>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    test("Figure 는 figure 태그로 시각화 된다.", () => {
      expect(screen.getByRole("figure").tagName).toEqual("FIGURE");
    });
    /*    test("$label 은 figcaption 으로 시각화 된다", () => {
      expect(screen.getByRole("figure").tagName).toEqual("FIGCATIOPN");
    });*/
  });
});
