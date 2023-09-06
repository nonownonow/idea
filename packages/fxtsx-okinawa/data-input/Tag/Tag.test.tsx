import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { TagProps } from "./Tag";
import { Tag } from "./Tag";
import { Default } from "./Tag.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <Tag data-testid={"Tag"} {...(Default.args as TagProps)} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-fx-input-field="true"
          data-fx-tag="true"
          data-testid="Tag"
        >
          <label
            data-fx-label="true"
            data-key="태그1"
            for="태그1"
          >
            태그1
          </label>
          <label
            data-fx-input-box="checkbox"
            data-value="[object Object]"
          >
            <input
              id="태그1"
              name="태그1"
              type="checkbox"
            />
            <span>
              [ ]
            </span>
            <span>
              [V]
            </span>
          </label>
        </div>
      </DocumentFragment>
    `);
  });
  test("fxtsx 의 InputField 를 상속받는다", () => {
    expect(screen.getByTestId("Tag")).toHaveAttribute("data-fx-input-field");
  });
});
