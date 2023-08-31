import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { SelectInputBox } from "fxtsx-html/data-input/SelectInputBox/SelectInputBox";
import { Default } from "fxtsx-html/data-input/SelectInputBox/SelectInputBox.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <SelectInputBox data-testid={"SelectInputBox"} {...Default.args} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <ul
          data-fx-dictionary="true"
          data-fx-list="true"
          data-fx-ul="true"
          data-testid="SelectInputBox"
        >
          <li>
            <label
              data-fx-input-box="checkbox"
              data-fx-value="true"
            >
              <input
                name="programmer"
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
          </li>
          <li>
            <label
              data-fx-input-box="checkbox"
              data-fx-value="true"
            >
              <input
                name="doctor"
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
          </li>
          <li>
            <label
              data-fx-input-box="checkbox"
              data-fx-value="true"
            >
              <input
                name="driver"
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
          </li>
        </ul>
      </DocumentFragment>
    `);
  });
});
