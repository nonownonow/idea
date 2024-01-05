import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { Default } from "packages/idea-html/data-input/InputBox/Checkbox/Checkbox.stories";
import type { InputBoxProps } from "packages/idea-html/data-input/InputBox/InputBox";

describe("랜더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <Checkbox data-testid={"Checkbox"} {...(Default.args as InputBoxProps)} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <label
          data-fx-input-box="checkbox"
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
  test(`data-fx-input-box="checkbox" 속성을 루트요소에 전달한다.`, () => {
    expect(screen.getByTestId("Checkbox")).toHaveAttribute(
      "data-fx-input-box",
      "checkbox"
    );
  });
});
