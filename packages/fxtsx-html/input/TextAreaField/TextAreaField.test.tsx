import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { TextAreaField } from "fxtsx-html/input/TextAreaField/TextAreaField";
import { Default } from "fxtsx-html/input/TextAreaField/TextAreaField.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <TextAreaField data-testid={"TextAreaField"} {...Default.args} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-testid="TextAreaField"
        >
          <label
            data-key="k"
            for="k"
          >
            k
          </label>
          <input
            data-testid="TextAreaField"
            id="k"
            value="hello world"
          />
        </div>
      </DocumentFragment>
    `);
  });
  describe("{k:v}를 $value 로 받아서 구조를 만든다", () => {
    test("루트 요소를 div 태그로 랜더링 한다", () => {
      expect(screen.getByTestId("TextAreaField").tagName).toEqual("DIV");
    });
  });
});
