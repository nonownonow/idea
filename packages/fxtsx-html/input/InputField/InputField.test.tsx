import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { InputField } from "fxtsx-html/input/InputField/InputField";
import { Default } from "fxtsx-html/input/InputField/InputField.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  let rerender: RenderResult["rerender"];
  beforeEach(() => {
    renderResult = render(
      <InputField data-testid={"InputField"} {...Default.args} />
    );
    rerender = renderResult.rerender;
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-key="키"
          data-testid="InputField"
        >
          <label
            data-fx-key="true"
            for="키"
          >
            키
          </label>
          <div
            data-fx-value="true"
          >
            <input
              data-testid="input"
              id="키"
            />
          </div>
          <div
            data-error="true"
          >
            error
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    test("루트는 div 태그로 랜더링한다", () => {
      expect(screen.getByTestId("InputField").tagName).toEqual("DIV");
    });
    test("$key 를 전달 받아서 label 태그로 랜더링한다", () => {
      expect(screen.getByText("키").tagName).toEqual("LABEL");
    });
    test("children 를 전달 받아서 div 태그로 랜더링한다", () => {
      expect(screen.getByTestId("input").parentElement?.tagName).toEqual("DIV");
    });
    test("$error 를 전달 받아서 div 태그로 랜더링한다. 이때 data-error 속성을 전달 받는다", () => {
      expect(screen.getByText("error")).toHaveAttribute("data-error");
    });
  });
});
