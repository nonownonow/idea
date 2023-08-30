/*
 * Comp: 테스트할 컴포넌트
 * fxtsxId: 루트에 전달할 fxtsxId
 * separatedProps: 루트프로퍼티를 분리할지 여부
 * */
import type { FC } from "react";
import React from "react";
import { render, screen } from "@testing-library/react";
import { anyPropsWithRootProps } from "fxtsx/FxTsx/FxTsx";

//todo: option 이용하도록 리펙토링 (계속 확장될 수 있으니까)
export function fxtsxTest(
  Comp: FC<any>,
  fxtsxId: string,
  separatedProps = false,
  requiredProps = {}
) {
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
