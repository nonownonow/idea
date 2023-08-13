import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { InputField } from "fxtsx-html/input/InputField/InputField";
import { Default } from "fxtsx-html/input/InputField/InputField.stories";
import { InputFieldTest } from "fxtsx-html/input/InputField/InputFieldTest";

describe("랜더링", () => {
  let renderResult: RenderResult;
  // let rerender: RenderResult["rerender"];
  beforeEach(() => {
    renderResult = render(
      <InputField data-testid={"InputField"} {...Default.args} />
    );
    // rerender = renderResult.rerender;
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
          <input
            data-fx-value="true"
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
});
InputFieldTest(InputField);
