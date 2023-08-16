import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Default } from "fxtsx-html/data-input/SelectBox/SelectBox.stories";
import { SelectBox } from "fxtsx-html/data-input/SelectBox/SelectBox";
import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";

describe("랜더링", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <SelectBox data-testid={"SelectBox"} {...Default.args} />
    );
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <select
          data-fx-list="true"
          data-fx-select-box="true"
          data-testid="SelectBox"
        >
          <option>
            a
          </option>
          <option>
            b
          </option>
          <option>
            c
          </option>
        </select>
      </DocumentFragment>
    `);
  });
  fxtsxTest(SelectBox, "data-fx-select-box");
  describe("$data 배열을 받아서 구조에 맞게 렌더링 한다", () => {
    test("루트는 select 태그다", () => {
      expect(screen.getByTestId("SelectBox").tagName).toEqual("SELECT");
    });
    test("배열의 요소는 option 태그다", () => {
      expect(screen.getByText("a").tagName).toEqual("OPTION");
    });
  });
});
