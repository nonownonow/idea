import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { RadioBox } from "./RadioBox";
import { userEvent } from "@storybook/testing-library";
import { Default } from "fxtsx-html/data-input/InputBox/Checkbox/Checkbox.stories";
import type { InputBox } from "fxtsx-html/data-input/InputBox/InputBox";

describe("랜더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <RadioBox data-testid={"RadioBox"} {...(Default.args as InputBox)} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <label
          data-fx-input-box="radio"
          data-testid="RadioBox"
        >
          <input
            type="radio"
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
    expect(screen.getByTestId("RadioBox")).toHaveAttribute(
      "data-fx-input-box",
      "radio"
    );
  });
  describe("기능", () => {
    test("🙂(언체크) 를 클릭하면 😆(체크) 로 바뀌고 다시 클릭하면 토글되지 않는다", async () => {
      const unCheckedMark = screen.getByTestId("unCheckedMark");
      expect(unCheckedMark).toBeInTheDocument();
      await userEvent.click(unCheckedMark);
      const checkedMark = screen.getByTestId("checkedMark");
      expect(checkedMark).toBeInTheDocument();
      await userEvent.click(checkedMark);
      expect(checkedMark).toBeInTheDocument();
    });
  });
});
