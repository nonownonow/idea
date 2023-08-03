import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { INPUT } from "fxtsx/INPUT/INPUT";
import { Component } from "fxtsx/util/util";
import { fxtsxTest } from "fxtsx/FxTsx/fxtsxTest";

describe("랜더링", () => {
  let renderResult: RenderResult;
  const Label = Component("Label");
  const Input = Component("Input");
  beforeEach(() => {
    renderResult = render(<INPUT Label={Label} Input={Input} />);
  });
  test("INPUT 의 구조를 랜더링한다", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-input="true"
          data-testid="Label"
        >
          <div
            data-testid="Input"
          />
        </div>
      </DocumentFragment>
    `);
  });
  describe("콜백 컴포넌트", () => {
    test("Label 은 루트 요소이다", () => {
      const { container } = renderResult;
      expect((container.firstChild as HTMLElement).dataset.testid).toEqual(
        "Label"
      );
    });
    test("Input 은 Label 의 자손이다", () => {
      const Input = screen.getByTestId("Input");
      expect(screen.getByTestId("Label")).toContainElement(Input);
    });
  });
});
fxtsxTest(INPUT, "data-fx-input", true);
