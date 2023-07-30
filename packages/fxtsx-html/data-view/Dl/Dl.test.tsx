import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Default } from "fxtsx-html/data-view/Ol/Ol.stories";
import { Dl } from "fxtsx-html/data-view/Dl/Dl";

describe("순서있는 리스트 Ordered List", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Dl {...Default.args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <dl
          data-fx-dl="true"
          data-fx-list="true"
        >
          <div>
            a
          </div>
          <div>
            b
          </div>
          <div>
            c
          </div>
        </dl>
      </DocumentFragment>
    `);
  });
  describe("배열 data 프로퍼티를 받아서", () => {
    test("루트 요소는 dl 태그로 랜더링한다", () => {
      const { container } = renderResult;
      expect((container.firstChild as HTMLElement).tagName).toEqual("DL");
    });
    test("배열의 요소는 div 태그로 랜더링 된다.", () => {
      expect(screen.getByText("a").tagName).toEqual("DIV");
    });
  });
});
