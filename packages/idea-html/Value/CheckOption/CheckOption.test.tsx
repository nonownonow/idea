import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { CheckOptionProps } from "packages/idea-html/Value/CheckOption/CheckOption";
import { CheckOption } from "packages/idea-html/Value/CheckOption/CheckOption";
import { Default } from "../Option/Option.stories";
import { fxtsxTest2 } from "packages/idea/FxTsx/fxtsxTest2";

describe("구조", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <CheckOption
        data-testid={"CheckOption"}
        {...(Default.args as CheckOptionProps)}
      />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <label
          data-fx-check-option="true"
          data-fx-value="true"
          data-testid="CheckOption"
        >
          <span>
            개발자
          </span>
          <label
            data-fx-input-box="checkbox"
          >
            <input
              type="checkbox"
              value="PROGRAMMER"
            />
            <span>
              [ ]
            </span>
            <span>
              [V]
            </span>
          </label>
        </label>
      </DocumentFragment>
    `);
  });
  fxtsxTest2(CheckOption, "data-fx-check-option", {
    requiredProps: Default.args,
    separatedProps: true,
  });
  test("VALUE 를 구현한다", () => {
    expect(screen.getByTestId("CheckOption")).toHaveAttribute("data-fx-value");
  });
  test("루트는 label 이고 InputBox 를 함께 렌더링한다", () => {
    expect(screen.getByTestId("CheckOption").tagName).toEqual("LABEL");
    const inputBox = screen.getByRole("checkbox");
    expect(screen.getByTestId("CheckOption")).toContainElement(inputBox);
  });
});
