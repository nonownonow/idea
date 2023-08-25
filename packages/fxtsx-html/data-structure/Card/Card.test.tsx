import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Default } from "fxtsx-html/data-structure/Card/Card.stories";
import { Card } from "fxtsx-html/data-structure/Card/Card";

describe("순서있는 리스트 Ordered List", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Card {...Default.args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <dl
          data-fx-card="true"
          data-fx-dictionary="true"
          data-fx-list="true"
        >
          <div
            data-fx-entry="true"
            data-key="a"
          >
            <dt
              data-fx-key="true"
            >
              a
            </dt>
            <dd
              data-fx-value="true"
            >
              1
            </dd>
          </div>
          <div
            data-fx-entry="true"
            data-key="b"
          >
            <dt
              data-fx-key="true"
            >
              b
            </dt>
            <dd
              data-fx-value="true"
            >
              2
            </dd>
          </div>
          <div
            data-fx-entry="true"
            data-key="c"
          >
            <dt
              data-fx-key="true"
            >
              c
            </dt>
            <dd
              data-fx-value="true"
            >
              3
            </dd>
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
  });
});
