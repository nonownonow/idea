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
        />
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
