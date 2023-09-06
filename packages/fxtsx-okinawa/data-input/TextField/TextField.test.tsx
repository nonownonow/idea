import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { TextField } from "./TextField";
import { Default } from "./TextField.stories";
import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";
import type { TextFieldProps } from "fxtsx-html/data-input/TextField/TextField";

fxtsxTest(TextField, "data-fx-text-field", true);
describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<TextField {...(Default.args as TextFieldProps)} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-fx-input-field="true"
          data-fx-text-field="true"
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
});

// InputFieldTest(TextField);
