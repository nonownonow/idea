import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Select } from "./Select";
import { Default } from "fxtsx-html/data-input/Select/Select.stories";

describe("렌더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<Select data-testid={"Select"} {...Default.args} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <fieldset
          data-fx-dictionary="true"
          data-fx-list="true"
          data-testid="Select"
        >
          <label
            data-fx-check-option="true"
            data-fx-value="true"
          >
            <span>
              의사
            </span>
            <label
              data-fx-input-box="checkbox"
            >
              <input
                name="직업"
                type="radio"
                value="DOCTOR"
              />
              <span>
                [ ]
              </span>
              <span>
                [V]
              </span>
            </label>
          </label>
          <label
            data-fx-check-option="true"
            data-fx-value="true"
          >
            <span>
              개발자
            </span>
            <label
              data-fx-input-box="checkbox"
            >
              <input
                name="직업"
                type="radio"
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
          <label
            data-fx-check-option="true"
            data-fx-value="true"
          >
            <span>
              운전기사
            </span>
            <label
              data-fx-input-box="checkbox"
            >
              <input
                name="직업"
                type="radio"
                value="DRIVER"
              />
              <span>
                [ ]
              </span>
              <span>
                [V]
              </span>
            </label>
          </label>
        </fieldset>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    test("DICTIONARY 를 구현한다", () => {
      expect(screen.getByTestId("Select")).toHaveAttribute(
        "data-fx-dictionary"
      );
    });
    /*    test("root 는 fieldset 태그다.", () => {
      expect(screen.getByTestId("Select").tagName).toEqual("FIELDSET");
    });*/

    test.todo("Item 은 Option으로 구현된다");
    test.todo("Option 의 Entry는 Iden ");
  });
});
