import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { TextField } from "./TextField";
import { Default } from "./TextField.stories";
import { InputFieldTest } from "fxtsx-html/data-input/InputField/InputFieldTest";
import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";

fxtsxTest(TextField, "data-fx-text-field", true);
describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<TextField {...Default.args} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-fx-input-field="true"
          data-fx-text-field="true"
          data-key="키"
        >
          <label
            data-fx-key="true"
            for="키"
          >
            이름
          </label>
          <input
            data-fx-value="true"
            id="키"
            type="text"
          />
        </div>
      </DocumentFragment>
    `);
  });
});

InputFieldTest(TextField);
