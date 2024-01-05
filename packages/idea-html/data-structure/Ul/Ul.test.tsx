import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Ul } from "packages/idea-html/data-structure/Ul/Ul";
import { Default } from "packages/idea-html/data-structure/Ul/Ul.stories";

describe("순서없는 리스트 Unordered List", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Ul {...Default.args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <ul
          data-fx-list="true"
          data-fx-ul="true"
        >
          <li>
            1
          </li>
          <li>
            2
          </li>
          <li>
            3
          </li>
        </ul>
      </DocumentFragment>
    `);
  });
  describe("배열 data 프로퍼티를 받아서", () => {
    test("루트 요소는 ul 태그로 랜더링한다", () => {
      const { container } = renderResult;
      expect((container.firstChild as HTMLElement).tagName).toEqual("UL");
    });
    test("배열의 요소는 li 태그로 랜더링 된다.", () => {
      expect(screen.getByText("1").tagName).toEqual("LI");
    });
  });
});
