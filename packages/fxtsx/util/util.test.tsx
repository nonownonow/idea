import { htmlChildren } from "./util";

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
