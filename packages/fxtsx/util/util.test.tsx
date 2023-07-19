import { ComponentWithoutRef, htmlChildren } from "./util";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";

describe("htmlChildren", () => {
  test("문자열 html 을 dangerouslySetInnerHTML prop 로 만든다", () => {
    expect(htmlChildren("test")).toStrictEqual({
      dangerouslySetInnerHTML: {
        __html: "test",
      },
    });
  });
  test("jsx 를 받아서 children prop 로 만든다", () => {
    expect(htmlChildren(<div>테스트</div>)).toStrictEqual({
      children: <div>테스트</div>,
    });
  });
});

describe("ComponentWithoutRef", () => {
  let renderResult: RenderResult;
  const CallbackComponentWithoutRef = ComponentWithoutRef("$CallbackComponent");
  beforeEach(() => {
    renderResult = render(
      <CallbackComponentWithoutRef id={"아이디"} subTitle={"부제목"}>
        test
      </CallbackComponentWithoutRef>
    );
  });
  test("고차 컴포넌트의 기본 콜백 콤포넌트 생성", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-testid="$CallbackComponent"
          id="아이디"
          sub-title="부제목"
        >
          test
        </div>
      </DocumentFragment>
    `);
  });
});
