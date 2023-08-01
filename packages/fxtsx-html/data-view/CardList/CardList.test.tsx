import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { CardList } from "fxtsx-html/data-view/CardList/CardList";
import { Default } from "fxtsx-html/data-view/CardList/CardList.stories";

describe("Card List", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<CardList {...Default.args} />);
  });
  test("렌더링", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <ul
          data-fx-dataframe="true"
          data-fx-list="true"
          data-fx-ul="true"
        >
          <li>
            <dl
              data-fx-card="true"
              data-fx-dictionary="true"
              data-fx-dl="true"
              data-fx-list="true"
            >
              <div>
                <dt>
                  a
                </dt>
                <dd>
                  1
                </dd>
              </div>
              <div>
                <dt>
                  b
                </dt>
                <dd>
                  2
                </dd>
              </div>
              <div>
                <dt>
                  c
                </dt>
                <dd>
                  3
                </dd>
              </div>
            </dl>
          </li>
          <li>
            <dl
              data-fx-card="true"
              data-fx-dictionary="true"
              data-fx-dl="true"
              data-fx-list="true"
            >
              <div>
                <dt>
                  a
                </dt>
                <dd>
                  11
                </dd>
              </div>
              <div>
                <dt>
                  b
                </dt>
                <dd>
                  22
                </dd>
              </div>
              <div>
                <dt>
                  c
                </dt>
                <dd>
                  33
                </dd>
              </div>
            </dl>
          </li>
          <li>
            <dl
              data-fx-card="true"
              data-fx-dictionary="true"
              data-fx-dl="true"
              data-fx-list="true"
            >
              <div>
                <dt>
                  a
                </dt>
                <dd>
                  111
                </dd>
              </div>
              <div>
                <dt>
                  b
                </dt>
                <dd>
                  222
                </dd>
              </div>
              <div>
                <dt>
                  c
                </dt>
                <dd>
                  333
                </dd>
              </div>
            </dl>
          </li>
        </ul>
      </DocumentFragment>
    `);
  });
  describe("객체배열 data 프로퍼티를 받아서", () => {
    test("루트 요소를 ul 태그로 랜더링한다", () => {
      const { container } = renderResult;
      expect((container.firstChild as HTMLElement).tagName).toEqual("UL");
    });
  });
});
