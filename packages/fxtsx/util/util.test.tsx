import { fxtsx, htmlChildren, separateProps } from "./util";
import { render } from "@testing-library/react";

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
  describe("fxtsx", () => {
    /*
     * 루트 컴포넌트 프로퍼티 = id, class data-* 등 루트 컴포넌트에 전달 되는 프로퍼티 목록
     * 자식 컴포넌트 프로퍼티 = 루트 컴포넌트에 속하지 않은 프로퍼티로 자식 컴포넌트로 전달되는 프로퍼티 목록
     * */
    describe("랜더링 함수를 파라미터로 받아서 컴포넌트를 리턴한다.", () => {
      test("컴포넌트에 프로퍼티를 전달하면 루트컴포넌트 프로퍼티와 자식컴포넌트 프로퍼티로 분리하며 랜더링 함수의 파라미터로 전달한다.", () => {});
      const renderFn = jest.fn((rootProps, childProps, ref) => (
        <div {...rootProps} {...childProps} ref={ref} />
      ));
      const FxComp = fxtsx(renderFn);
      render(
        <FxComp
          id={"myId"}
          className={"myClassName"}
          test-attr={"myTestAttr"}
          data-test={"myDataTest"}
        />
      );
      expect(renderFn.mock.calls[0][0]).toHaveProperty("id");
      expect(renderFn.mock.calls[0][0]).toHaveProperty("className");
      expect(renderFn.mock.calls[0][0]).toHaveProperty("data-test");
      expect(renderFn.mock.calls[0][0]).not.toHaveProperty("test-attr");
      expect(renderFn.mock.calls[0][1]).toHaveProperty("test-attr");
    });
  });
});
