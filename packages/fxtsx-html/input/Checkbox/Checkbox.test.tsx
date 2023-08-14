import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { fxtsxTestV2 } from "fxtsx/FxTsx/fxtsxTest";
import { userEvent } from "@storybook/testing-library";
import { Default } from "fxtsx-html/input/Checkbox/Checkbox.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <Checkbox data-testid={"Checkbox"} {...Default.args} />
    );
  });
  fxtsxTestV2(Checkbox, "data-fx-checkbox", true);
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <label
          data-fx-checkbox="true"
          data-testid="Checkbox"
        >
          <input
            type="checkbox"
          />
          <span>
            <span
              data-testid="unCheckedMark"
            >
              🙂
            </span>
          </span>
          <span>
            <span
              data-testid="checkedMark"
            >
              😆
            </span>
          </span>
        </label>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    let rootEl: HTMLElement;
    beforeEach(() => {
      rootEl = screen.getByTestId("Checkbox");
    });
    test("루트는 label 태그", () => {
      expect(rootEl.tagName).toEqual("LABEL");
    });
    test("루트의 첫번째 요소는 input 이다", () => {
      expect(rootEl.children[0].tagName).toEqual("INPUT");
    });
    test("루트의 텍스트는 🙂다", () => {
      expect(rootEl).toHaveTextContent("🙂");
    });
  });
  describe("기능", () => {
    test("🙂(언체크) 를 클릭하면 😆(체크) 로 바뀌고 다시 클릭하면 토글된다", async () => {
      const unCheckedMark = screen.getByTestId("unCheckedMark");
      expect(unCheckedMark).toBeInTheDocument();
      await userEvent.click(unCheckedMark);
      const checkedMark = screen.getByTestId("checkedMark");
      expect(checkedMark).toBeInTheDocument();
      await userEvent.click(unCheckedMark);
      expect(unCheckedMark).toBeInTheDocument();
    });
  });
});
