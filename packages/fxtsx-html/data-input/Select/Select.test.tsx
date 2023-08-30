import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Select } from "./Select";

describe("렌더링", () => {
  let renderResult: RenderResult;
  const args = {
    $data: {
      doctor: "DOCTOR",
      programmer: "PROGRAMMER",
      driver: "DRIVER",
    },
  };
  beforeEach(() => {
    renderResult = render(<Select data-testid={"Select"} {...args} />);
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-dictionary="true"
          data-fx-list="true"
          data-testid="Select"
        >
          <div>
            <div
              data-fx-entry="true"
              data-key="doctor"
            >
              <div
                data-fx-key="true"
              >
                doctor
              </div>
              <div
                data-fx-value="true"
                name="doctor"
                value="DOCTOR"
              >
                DOCTOR
              </div>
            </div>
          </div>
          <div>
            <div
              data-fx-entry="true"
              data-key="programmer"
            >
              <div
                data-fx-key="true"
              >
                programmer
              </div>
              <div
                data-fx-value="true"
                name="programmer"
                value="PROGRAMMER"
              >
                PROGRAMMER
              </div>
            </div>
          </div>
          <div>
            <div
              data-fx-entry="true"
              data-key="driver"
            >
              <div
                data-fx-key="true"
              >
                driver
              </div>
              <div
                data-fx-value="true"
                name="driver"
                value="DRIVER"
              >
                DRIVER
              </div>
            </div>
          </div>
        </div>
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
