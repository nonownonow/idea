import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Default } from "fxtsx-html/data-view/Card/Card.stories";
import { Card } from "fxtsx-html/data-view/Card/Card";

describe("순서있는 리스트 Ordered List", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Card {...Default.args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-dictionary="true"
          data-fx-dl="true"
          data-fx-list="true"
        >
          <div>
            <div>
              <div>
                a
              </div>
              <div>
                1
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                b
              </div>
              <div>
                2
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                c
              </div>
              <div>
                3
              </div>
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  describe("배열 data 프로퍼티를 받아서", () => {
    test("루트 요소는 dl 태그로 랜더링한다", () => {
      const { container } = renderResult;
      expect((container.firstChild as HTMLElement).tagName).toEqual("DIV");
    });
  });
});
