import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { SelectFieldProps } from "packages/idea-html/data-input/SelectField/SelectField";
import { SelectField } from "packages/idea-html/data-input/SelectField/SelectField";
import { Default } from "./SelectField.stories";
import type { DicData } from "packages/idea/fxtsx.type";

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
            data-select="true"
          >
            <label
              data-fx-check-option="true"
              data-fx-value="true"
              data-value="DOCTOR"
            >
              <span>
                의사
              </span>
              <label
                data-fx-input-box="checkbox"
              >
                <input
                  id="job"
                  name="job"
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
            <label
              data-fx-check-option="true"
              data-fx-value="true"
              data-value="PROGRAMMER"
            >
              <span>
                개발자
              </span>
              <label
                data-fx-input-box="checkbox"
              >
                <input
                  id="job"
                  name="job"
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
            <label
              data-fx-check-option="true"
              data-fx-value="true"
              data-value="DRIVER"
            >
              <span>
                운전기사
              </span>
              <label
                data-fx-input-box="checkbox"
              >
                <input
                  id="job"
                  name="job"
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
        </div>
      </DocumentFragment>
    `);
  });
});
