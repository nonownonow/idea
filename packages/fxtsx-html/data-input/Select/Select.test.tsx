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
          <label>
            의사
            <label
              data-fx-input-box="checkbox"
              data-fx-value="true"
            >
              <input
                type="checkbox"
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
          <label>
            개발자
            <label
              data-fx-input-box="checkbox"
              data-fx-value="true"
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
          <label>
            운전기사
            <label
              data-fx-input-box="checkbox"
              data-fx-value="true"
            >
              <input
                type="checkbox"
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
