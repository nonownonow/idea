import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { TextAreaFieldProps } from "packages/idea-html/data-input/TextAreaField/TextAreaField";
import { TextAreaField } from "packages/idea-html/data-input/TextAreaField/TextAreaField";
import { Default } from "packages/idea-html/data-input/TextAreaField/TextAreaField.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <TextAreaField
        data-testid={"TextAreaField"}
        {...(Default.args as TextAreaFieldProps)}
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
          data-testid="TextAreaField"
        >
          <label
            data-fx-label="true"
            data-key="k"
            for="k"
          >
            이름
          </label>
          <textarea
            data-value="textarea"
            id="k"
            name="k"
          />
        </div>
      </DocumentFragment>
    `);
  });
  /*describe("{k:v}를 $value 로 받아서 구조를 만든다", () => {
    test("루트 요소를 div 태그로 랜더링 한다", () => {
      expect(screen.getByTestId("TextAreaField").tagName).toEqual("DIV");
    });
  });*/
});
