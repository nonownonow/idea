import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { createRef } from "react";
import type { FXTSXRenderFunction } from "./FxTsx";
import { Fxtsx, rootProps, separateProps } from "./FxTsx";
import { Component } from "fxtsx/util/util";

export const anyPropsWithRootProps = {
  ...rootProps,
  any: "my-any-props",
};
describe("FxTsx - 랜더 함수를 전달 받으면", () => {
  const CallbackComponentWithoutRef = Component("$CallbackComponent");
  const CallbackComponentWithRef = Component("$CallbackComponentWithRef");
  const renderFn: FXTSXRenderFunction<HTMLElement, any> = (
    rootProps,
    restProps,
    ref
  ) => (
    <CallbackComponentWithRef {...rootProps} ref={ref}>
      <CallbackComponentWithoutRef {...restProps} />
    </CallbackComponentWithRef>
  );
  const FxTsxComponent = Fxtsx<any, any>(renderFn);
  const ref = createRef();
  let renderResult: RenderResult;
  renderResult = render(
    <FxTsxComponent {...anyPropsWithRootProps} ref={ref}>
      children
    </FxTsxComponent>
  );
  test("프로퍼티를 루트프로퍼티와 비루트프로퍼티로 나눠서 랜더함수에 넘겨준다", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="my-class"
          data-test="my-data-test"
          data-testid="$CallbackComponentWithRef"
          id="my-id"
          style="font-size: 1rem;"
          tab-index="0"
        >
          <div
            any="my-any-props"
            data-testid="$CallbackComponent"
          >
            children
          </div>
        </div>
      </DocumentFragment>
    `);
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
