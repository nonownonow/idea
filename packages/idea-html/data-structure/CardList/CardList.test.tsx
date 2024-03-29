import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { CardList } from "packages/idea-html/data-structure/CardList/CardList";
import { Default } from "packages/idea-html/data-structure/CardList/CardList.stories";

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
          </li>
          <li>
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
                  data-value="11"
                >
                  11
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
                  data-value="22"
                >
                  22
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
                  data-value="33"
                >
                  33
                </dd>
              </div>
            </dl>
          </li>
          <li>
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
                  data-value="111"
                >
                  111
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
                  data-value="222"
                >
                  222
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
                  data-value="333"
                >
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
