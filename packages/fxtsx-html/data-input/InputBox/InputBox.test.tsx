import { fxtsxTestV2 } from "fxtsx/FxTsx/fxtsxTest";
import { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";
import { render, screen } from "@testing-library/react";
import { Default } from "fxtsx-html/data-input/InputBox/InputBox.stories";

describe("렌더링", () => {
  fxtsxTestV2(InputBox, "data-fx-input-box", true);
  describe("구조", () => {
    let rootEl: HTMLElement;
    beforeEach(() => {
      render(<InputBox data-testid={"Checkbox"} {...Default.args} />);
      rootEl = screen.getByTestId("Checkbox");
    });
    test("루트는 label 태그", () => {
      expect(rootEl.tagName).toEqual("LABEL");
    });
    test("루트의 첫번째 요소는 input 이다", () => {
      expect(rootEl.children[0].tagName).toEqual("INPUT");
    });
  });
});
