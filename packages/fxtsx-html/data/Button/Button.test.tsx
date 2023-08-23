import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Button } from "fxtsx-html/data/Button/Button";
import { Default, WithUrl } from "./Button.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Button data-testId={"Button"} {...Default.args} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          data-fx-button="true"
          data-testid="Button"
        >
          버튼
        </button>
      </DocumentFragment>
    `);
  });
  test("Button 은 button 태그로 렌더링 된다", () => {
    expect(screen.getByTestId("Button").tagName).toEqual("BUTTON");
  });
  describe("$url 이 있으면", () => {
    test("Button 은 a 태그로 렌더링 된다", () => {
      const { rerender } = renderResult;
      rerender(<Button data-testId={"Button"} {...WithUrl.args} />);
      expect(screen.getByTestId("Button").tagName).toEqual("A");
    });
  });
});
