import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { InputField } from "packages/idea-html/data-input/InputField/InputField";
import { Default } from "packages/idea-html/data-input/InputField/InputField.stories";
import { fxtsxTest } from "packages/idea/FxTsx/fxtsxTest";
import { userEvent } from "@storybook/testing-library";
import type { TextFieldProps } from "packages/idea-html/data-input/TextField/TextField";
import { TextField } from "packages/idea-html/data-input/TextField/TextField";

describe("랜더링", () => {
  let renderResult: RenderResult;
  // let rerender: RenderResult["rerender"];
  beforeEach(() => {
    renderResult = render(
      <InputField
        data-testid={"InputField"}
        {...(Default.args as InputField)}
      />
    );
    // rerender = renderResult.rerender;
  });
  fxtsxTest(InputField, "data-fx-input-field", true, Default.args);
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-fx-input-field="true"
          data-testid="InputField"
        >
          <label
            data-fx-label="true"
            data-key="키"
            for="키"
          >
            키
          </label>
          <input
            data-value="input"
            id="키"
            name="키"
          />
          <div
            data-error="true"
          >
            error
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  /*  test("children 를 전달 받아서 div 태그로 랜더링한다", () => {
    expect(screen.getByTestId("input").parentElement?.tagName).toEqual("DIV");
  });*/
  test("텍스트 '키'를 클릭하면 input 에 포커스가 들어간다", async () => {
    const label = screen.getByLabelText("키");
    await userEvent.click(label);
    expect(screen.getByRole("textbox", { name: "키" })).toHaveFocus();
  });
  test("$label 에 html 태그를 사용되면 dom 으로 파싱되어 렌더링된다. ", async () => {
    const { rerender } = renderResult;
    rerender(
      <TextField
        {...(Default.args as TextFieldProps)}
        $label={"이름을 <em>작성해주세요</em>"}
      />
    );
    expect(screen.getByText("작성해주세요").tagName).toEqual("EM");
  });
});
// InputFieldTest(InputField);
