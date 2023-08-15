import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
import { Default } from "fxtsx-html/data-input/InputBox/Checkbox/Checkbox.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <Checkbox data-testid={"Checkbox"} {...Default.args} />
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
  describe("기능", () => {
    /*test("🙂(언체크) 를 클릭하면 😆(체크) 로 바뀌고 다시 클릭하면 토글된다", async () => {
      let unCheckedMark = screen.getByTestId("unCheckedMark");
      let checkedMark = screen.getByTestId("unCheckedMark");
      let label = screen.getByTestId("Checkbox");
      expect(unCheckedMark).toBeVisible();
      await userEvent.click(label);
      expect(checkedMark).not.toBeInTheDocument();
      expect(unCheckedMark).toBeVisible();
      await userEvent.click(label);
      expect(checkedMark).toBeVisible();
      expect(unCheckedMark).toBeVisible();
    });*/
  });
});
