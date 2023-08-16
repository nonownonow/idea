import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Default } from "fxtsx-html/data-input/SelectBox/SelectBox.stories";
import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";
import { SelectInputBox } from "fxtsx-html/data-input/SelectInputBox/SelectInputBox";

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
        <fieldset
          data-fx-list="true"
          data-fx-select-box="true"
          data-testid="SelectInputBox"
        >
          <label
            data-fx-input-box="checkbox"
          >
            <input
              type="checkbox"
              value="a"
            />
            <span>
              [ ]
            </span>
            <span>
              [V]
            </span>
          </label>
          <label
            data-fx-input-box="checkbox"
          >
            <input
              type="checkbox"
              value="b"
            />
            <span>
              [ ]
            </span>
            <span>
              [V]
            </span>
          </label>
          <label
            data-fx-input-box="checkbox"
          >
            <input
              type="checkbox"
              value="c"
            />
            <span>
              [ ]
            </span>
            <span>
              [V]
            </span>
          </label>
        </fieldset>
      </DocumentFragment>
    `);
  });
  fxtsxTest(SelectInputBox, "data-fx-select-box");
  describe("$data 배열을 받아서 구조에 맞게 렌더링 한다", () => {
    test("루트는 select 태그다", () => {
      expect(screen.getByTestId("SelectInputBox").tagName).toEqual("FIELDSET");
    });
    /* todo:   test("배열의 요소는 InputBox 로 렌더링된다.", () => {
      expect(screen.getAllByText("[ ]")[0]).toHaveAttribute(
        "data-fx-input-box"
      );
    });*/
  });
});
