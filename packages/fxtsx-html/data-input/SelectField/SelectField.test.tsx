import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { SelectFieldProps } from "fxtsx-html/data-input/SelectField/SelectField";
import { SelectField } from "fxtsx-html/data-input/SelectField/SelectField";
import { Default } from "./SelectField.stories";
import type { DicData } from "fxtsx/fxtsx.type";

describe("렌더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <SelectField
        data-testid={"Select"}
        {...(Default.args as SelectFieldProps<DicData>)}
      />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-fx-input-field="true"
          data-fx-text-field="true"
          data-testid="Select"
        >
          <label
            data-fx-label="true"
            data-key="job"
            for="job"
          >
            직업
          </label>
          <fieldset
            data-fx-dictionary="true"
            data-fx-list="true"
          >
            <label
              data-fx-check-option="true"
              data-fx-value="true"
              data-value="DOCTOR"
            >
              <span />
              <label
                data-fx-input-box="checkbox"
              >
                <input
                  id="job"
                  name="job"
                  type="checkbox"
                  value=""
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
              data-value="PROGRAMMER"
            >
              <span />
              <label
                data-fx-input-box="checkbox"
              >
                <input
                  id="job"
                  name="job"
                  type="checkbox"
                  value=""
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
              data-value="DRIVER"
            >
              <span />
              <label
                data-fx-input-box="checkbox"
              >
                <input
                  id="job"
                  name="job"
                  type="checkbox"
                  value=""
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
        </div>
      </DocumentFragment>
    `);
  });
});
