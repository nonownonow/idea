import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";
import { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";
import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Default } from "fxtsx-html/data-input/InputBox/InputBox.stories";

describe("렌더링", () => {
  fxtsxTest(InputBox, "data-fx-input-box", true);
  describe("구조", () => {
    let rootEl: HTMLElement;
    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <InputBox data-testid={"Checkbox"} {...(Default.args as InputBox)} />
      );
      rootEl = screen.getByTestId("Checkbox");
    });
    test("스냅샷", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <label>
            여자
            <label
              data-fx-input-box="checkbox"
              data-testid="Checkbox"
            >
              <input
                type="checkbox"
                value="women"
              />
              <span>
                <span
                  data-testid="unCheckedMark"
                >
                  [ ]
                </span>
              </span>
              <span>
                <span
                  data-testid="checkedMark"
                >
                  [✔]
                </span>
              </span>
            </label>
          </label>
        </DocumentFragment>
      `);
    });
    test("루트는 label 태그", () => {
      expect(rootEl.tagName).toEqual("LABEL");
    });
    test("루트의 첫번째 요소는 input 이다", () => {
      expect(rootEl.children[0].tagName).toEqual("INPUT");
    });
  });
});
