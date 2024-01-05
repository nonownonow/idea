import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Ol } from "packages/idea-html/data-structure/Ol/Ol";
import { Default } from "packages/idea-html/data-structure/Ol/Ol.stories";

describe("순서있는 리스트 Ordered List", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Ol {...Default.args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <ol
          data-fx-list="true"
          data-fx-ol="true"
        >
          <li>
            a
          </li>
          <li>
            b
          </li>
          <li>
            c
          </li>
        </ol>
      </DocumentFragment>
    `);
  });
  describe("배열 data 프로퍼티를 받아서", () => {
    test("루트 요소는 ul 태그로 랜더링한다", () => {
      const { container } = renderResult;
      expect((container.firstChild as HTMLElement).tagName).toEqual("OL");
    });
    test("배열의 요소는 li 태그로 랜더링 된다.", () => {
      expect(screen.getByText("a").tagName).toEqual("LI");
    });
  });
});
