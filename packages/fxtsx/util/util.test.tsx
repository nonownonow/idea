import { htmlChildren, separateProps } from "./util";

describe("util", () => {
  describe("separateProps", () => {
    test("props 와 rootPropsKeys(root 컴포넌트에서 사용될 props 의 키 배열)을 받아서 rootPropsKeys 에 매핑된 props 와 그렇지 않은 props 로 나눈다", () => {
      const props: Record<string, any> = {
        className: "my-class-name",
        label: "my-label",
        tabIndex: 0,
      };
      let keys = ["className", "tabIndex"];
      expect(separateProps(props, keys)).toStrictEqual([
        { className: "my-class-name", tabIndex: 0 },
        { label: "my-label" },
      ]);
      keys = ["className"];
      expect(separateProps(props, keys)).toStrictEqual([
        { className: "my-class-name" },
        { label: "my-label", tabIndex: 0 },
      ]);
    });
    test("rootPropsKeys 에는 정규식도 포함된다", () => {
      const props: Record<string, any> = {
        className: "my-class-name",
        label: "my-label",
        tabIndex: 0,
        "data-my-data": true,
      };
      const keys = ["className", /data-.+/];
      expect(separateProps(props, keys)).toStrictEqual([
        { className: "my-class-name", "data-my-data": true },
        { label: "my-label", tabIndex: 0 },
      ]);
    });
  });
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
});

const r = <div>e</div>;
console.log(typeof r);
