/*
 * Comp: 테스트할 컴포넌트
 * fxtsxId: 루트에 전달할 fxtsxId
 * separatedProps: 루트프로퍼티를 분리할지 여부
 * */
import type { FC } from "react";
import React from "react";
import { render } from "@testing-library/react";
import { anyPropsWithRootProps } from "fxtsx/FxTsx/FxTsx";

export function fxtsxTest(
  Comp: FC<any>
  // fxtsxId: string,
  // separatedProps = false
) {
  describe("FXTSX 스펙을 따라 구현하여서", () => {
    const RootPlaceholder = "Root";
    beforeEach(() => {
      render(<Comp {...anyPropsWithRootProps}>{RootPlaceholder}</Comp>);
    });
    /*    test(`${fxtsxId} 속성을 루트요소에 전달한다.`, () => {
          expect(screen.getByText(RootPlaceholder)).toHaveAttribute(fxtsxId);
        });*/
    /*    test("루트프로퍼티를 루트요소에 전달한다.", () => {
          expect(screen.getByText(RootPlaceholder)).toHaveAttribute("id", "my-id");
        });*/
    /*if (!separatedProps) {
          test("루트프로퍼티가 아닌 프로퍼티를 루트요소에 전달한다", () => {
            const r = screen.getByText(RootPlaceholder);
            expect(r).toHaveAttribute("any", "my-any-props");
          });
        } else {
          test("루트프로퍼티가 아닌 프로퍼티를 루트요소에 전달하지 않는다", () => {
            expect(screen.getByText(RootPlaceholder)).not.toHaveAttribute(
              "any",
              "my-any-props"
            );
          });
        }*/
  });
}
