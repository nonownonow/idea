/*
 * Comp: 테스트할 컴포넌트
 * fxtsxId: 루트에 전달할 fxtsxId
 * separatedProps: 루트프로퍼티를 분리할지 여부
 * */
import type { FC } from "react";
import React from "react";
import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { anyPropsWithRootProps } from "fxtsx/FxTsx/FxTsx.test";

export function fxtsxTest(
  Comp: FC<any>,
  fxtsxId: string,
  separatedProps = false
) {
  describe("FXTSX 스펙을 따라 구현하여서", () => {
    let renderResult: RenderResult;
    let rootEl: ChildNode | null;
    beforeEach(() => {
      renderResult = render(
        <Comp {...anyPropsWithRootProps} data-testid={"FXTSX"} />
      );
      rootEl = renderResult.container.firstChild;
    });
    test(`${fxtsxId} 속성을 루트요소에 전달한다.`, () => {
      expect(screen.getByTestId("FXTSX")).toHaveAttribute(fxtsxId);
    });
    test("루트프로퍼티를 루트요소에 전달한다.", () => {
      expect(rootEl).toHaveAttribute("id", "my-id");
      expect(rootEl).toHaveAttribute("data-testid", "FXTSX");
    });
    if (!separatedProps) {
      test("루트프로퍼티가 아닌 프로퍼티를 루트요소에 전달한다", () => {
        expect(rootEl).toHaveAttribute("any", "my-any-props");
      });
    } else {
      test("루트프로퍼티가 아닌 프로퍼티를 루트요소에 전달하지 않는다", () => {
        expect(rootEl).not.toHaveAttribute("any", "my-any-props");
      });
    }
  });
}
