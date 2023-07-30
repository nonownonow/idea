import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { UL } from "fxtsx-html/data-view/UL";

describe("순서없는 리스트 Unordered List", () => {
  let renderResult: RenderResult;
  const args = {
    $data: [1, 2, 3],
  };
  beforeEach(() => {
    renderResult = render(<UL {...args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <ul
          data-fx-list="true"
        >
          <div
            index="0"
            value="1"
          >
            1
          </div>
          <div
            index="1"
            value="2"
          >
            2
          </div>
          <div
            index="2"
            value="3"
          >
            3
          </div>
        </ul>
      </DocumentFragment>
    `);
  });
  describe("배열 data 프로퍼티를 받아서", () => {
    test("루트 요소는 ul 태그로 랜더링한다", () => {
      const { container } = renderResult;
      expect((container.firstChild as HTMLElement).tagName).toEqual("UL");
    });
    test.skip("배열의 요소는 li 태그로 랜더링 된다.", () => {
      expect(screen.getByText("1").tagName).toEqual("LI");
    });
  });
});
