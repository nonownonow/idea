import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { DropDown } from "fxtsx-html/data-view/DropDown/DropDown";
import { Default } from "fxtsx-html/data-view/DropDown/DropDown.stories";

describe("렌더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<DropDown {...Default.args} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <nav
          data-fx-dropdown="true"
        >
          <button>
            메뉴
          </button>
          <ul
            data-fx-list="true"
            data-fx-ul="true"
          >
            <li>
              <a
                href="https://www.naver.com"
                rel="noreferrer"
                target="_blank"
              >
                네이버
              </a>
            </li>
            <li>
              <a
                href="https://www.google"
                rel="noreferrer"
                target="_blank"
              >
                구글
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                페이스북
              </a>
            </li>
          </ul>
        </nav>
      </DocumentFragment>
    `);
  });
});
