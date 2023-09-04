import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Aside } from "fxtsx-html/sectioning/Aside/Aside";
import { Aside_Default } from "fxtsx-html/sectioning/Aside/Aside.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Aside {...Aside_Default.args} />);
  });
  test("SECTIONING 과 HTMLElement 타입의 프로퍼티를 전달받아서 루트가 aside 인 DOM 조각을 만든다.", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-sectioning="true"
        >
          <div
            dangerously-set-inner-html="[object Object]"
            level="1"
            title="제목"
          />
          <div
            data-fx-sectioning-contents="true"
          >
            컨텐츠
          </div>
        </div>
      </DocumentFragment>
    `);
  });
});
