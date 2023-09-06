import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { TextFieldProps } from "fxtsx-html/data-input/TextField/TextField";
import { TextField } from "fxtsx-html/data-input/TextField/TextField";
import { Default } from "fxtsx-html/data-input/TextField/TextField.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <TextField
        data-testid={"TextField"}
        {...(Default.args as TextFieldProps)}
      />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-fx-input-field="true"
          data-fx-text-field="true"
          data-testid="TextField"
        >
          <label
            data-fx-label="true"
            data-key="키"
            for="키"
          >
            이름
          </label>
          <input
            data-value="input"
            id="키"
            name="키"
            type="text"
          />
        </div>
      </DocumentFragment>
    `);
  });
  test("InputField 로 구현한다", () => {
    expect(screen.getByTestId("TextField")).toHaveAttribute(
      "data-fx-input-field"
    );
  });
});
// InputFieldTest(TextField);
