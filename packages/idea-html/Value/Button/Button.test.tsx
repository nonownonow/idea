import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { ButtonProps } from "packages/idea-html/Value/Button/Button";
import { Button } from "packages/idea-html/Value/Button/Button";
import { Default, WithUrl } from "./Button.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <Button data-testid={"Button"} {...(Default.args as ButtonProps)} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          data-fx-button="true"
          data-fx-value="true"
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
      rerender(
        <Button data-testid={"Button"} {...(WithUrl.args as ButtonProps)} />
      );
      expect(screen.getByTestId("Button").tagName).toEqual("A");
    });
  });
});
