/*
 * Comp: 테스트할 컴포넌트
 * fxtsxId: 루트에 전달할 fxtsxId
 * separatedProps: 루트프로퍼티를 분리할지 여부
 * */
import type { FC } from "react";
import React from "react";
import { render, screen } from "@testing-library/react";
import { anyPropsWithRootProps } from "packages/idea/FxTsx/FxTsx";

type Option = {
  separatedProps?: boolean;
  requiredProps?: Record<string, any>;
};
export function fxtsxTest2(
  Comp: FC<any>,
  fxtsxId: string,
  option: Option = {
    separatedProps: false,
    requiredProps: {},
  }
) {
  const { separatedProps = false, requiredProps = {} } = option;
  describe("FXTSX 스펙을 따라 구현하여서", () => {
    beforeEach(() => {
      render(
        <Comp
          {...anyPropsWithRootProps}
          data-testid={"Root"}
          {...requiredProps}
        />
      );
    });
    test(`${fxtsxId} 속성을 루트요소에 전달한다.`, () => {
      expect(screen.getByTestId("Root")).toHaveAttribute(fxtsxId);
    });
    test("루트프로퍼티를 루트요소에 전달한다.", () => {
      expect(screen.getByTestId("Root")).toHaveAttribute("style");
    });
    if (!separatedProps) {
      test("루트프로퍼티가 아닌 프로퍼티를 루트요소에 전달한다", () => {
        expect(screen.getByTestId("Root")).toHaveAttribute(
          "any",
          "my-any-props"
        );
      });
    } else {
      test("루트프로퍼티가 아닌 프로퍼티를 루트요소에 전달하지 않는다", () => {
        expect(screen.getByTestId("Root")).not.toHaveAttribute(
          "any",
          "my-any-props"
        );
      });
    }
  });
}
