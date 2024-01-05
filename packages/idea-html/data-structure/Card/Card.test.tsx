import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Default } from "packages/idea-html/data-structure/Card/Card.stories";
import type { CardProps } from "packages/idea-html/data-structure/Card/Card";
import { Card } from "packages/idea-html/data-structure/Card/Card";
import type { DicData } from "packages/idea/fxtsx.type";

describe("순서있는 리스트 Ordered List", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Card {...(Default.args as CardProps<DicData>)} />);
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
          >
            <dt
              data-fx-value="true"
              data-key="a"
            >
              a
            </dt>
            <dd
              data-fx-value="true"
              data-value="1"
            >
              1
            </dd>
          </div>
          <div
            data-fx-entry="true"
          >
            <dt
              data-fx-value="true"
              data-key="b"
            >
              b
            </dt>
            <dd
              data-fx-value="true"
              data-value="2"
            >
              2
            </dd>
          </div>
          <div
            data-fx-entry="true"
          >
            <dt
              data-fx-value="true"
              data-key="c"
            >
              c
            </dt>
            <dd
              data-fx-value="true"
              data-value="3"
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
