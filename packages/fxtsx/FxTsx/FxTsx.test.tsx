import { render } from "@testing-library/react";
import React, { createRef } from "react";
import { Fxtsx, separateProps } from "./FxTsx";
import type { RootElementProps } from "../fxtsx.type";

export const rootProps: RootElementProps = {
  id: "my-id",
  className: "my-class",
  tabIndex: 0,
  style: {
    fontSize: "1rem",
  },
  "data-test": "my-data-test",
};
export const componentProps = {
  ...rootProps,
  "no-root-props": "my-no-root-props",
};
describe("FxTsx", () => {
  const renderFn = jest.fn((rootProps, restProps, ref) => (
    <div {...rootProps} {...restProps} ref={ref} />
  ));
  const FxTsxComponent = Fxtsx<unknown, any>(renderFn);
  const ref = createRef();
  render(<FxTsxComponent {...componentProps} ref={ref} />);
  test("함수를 전달 받고 루트프로퍼티와 비루트프로퍼티와 ref 를 전달 받은 함수에 넘겨준다", () => {
    ["id", "className", "tabIndex", "data-test"].forEach((key) => {
      expect(renderFn.mock.calls[0][0]).toHaveProperty(key);
    });
    expect(renderFn.mock.calls[0][0]).not.toHaveProperty("no-root-props");
    expect(renderFn.mock.calls[0][1]).toHaveProperty("no-root-props");
    expect(renderFn.mock.calls[0][2]).toHaveProperty("current");
  });
});

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
