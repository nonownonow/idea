import type { FC } from "react";
import { render, screen } from "@testing-library/react";

export function InputFieldTest(Comp: FC<any>) {
  describe("구조", () => {
    const $key = "키";
    const args = {
      $key,
      children: <input data-testid={"input"} id={$key} />,
      $error: "error",
    };
    beforeEach(() => {
      render(<Comp data-testid={"TextField"} {...args} />);
    });
    test("루트는 div 태그로 랜더링한다", () => {
      expect(screen.getByTestId("TextField").tagName).toEqual("DIV");
    });
    test("$key 를 전달 받아서 label 태그로 랜더링한다", () => {
      expect(screen.getByText("키").tagName).toEqual("LABEL");
    });

    test("$error 를 전달 받아서 div 태그로 랜더링한다. 이때 data-error 속성을 전달 받는다", () => {
      expect(screen.getByText("error")).toHaveAttribute("data-error");
    });
  });
}
