import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { TextField } from "fxtsx-html/data-input/TextField/TextField";
import { Default } from "fxtsx-html/data-input/TextField/TextField.stories";
import { InputFieldTest } from "fxtsx-html/data-input/InputField/InputFieldTest";
import { userEvent } from "@storybook/testing-library";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <TextField data-testid={"TextField"} {...Default.args} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-fx-text-field="true"
          data-key="키"
          data-testid="TextField"
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
  test("텍스트 '키'를 클릭하면 input 에 포커스가 들어간다", async () => {
    const label = screen.getByLabelText("이름");
    await userEvent.click(label);
    expect(screen.getByRole("textbox", { name: "이름" })).toHaveFocus();
  });
  test("$label 에 html 태그를 사용되면 dom 으로 파싱되어 렌더링된다. ", async () => {
    const { rerender } = renderResult;
    rerender(
      <TextField {...Default.args} $label={"이름을 <em>작성해주세요</em>"} />
    );
    expect(screen.getByText("작성해주세요").tagName).toEqual("EM");
  });
});
InputFieldTest(TextField);