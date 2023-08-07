import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { P } from "./P";
import { fxtsxTest } from "fxtsx/util/FxtsxTest";

fxtsxTest(P, "data-fx-p");
describe("랜더링", () => {
  let renderResult: RenderResult;
  let rerender: RenderResult["rerender"];
  const args: any = {};
  beforeEach(() => {
    renderResult = render(<P data-testid={"Root"} {...args} />);
    rerender = renderResult.rerender;
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <p
          data-fx-mode="Read"
          data-fx-p="true"
          data-fx-value="true"
          data-testid="Root"
        />
      </DocumentFragment>
    `);
  });
  test("Load 모드 일 경우 루트는 div 태그로 랜더링 되고 data-fx-mode=Load 속성을 갖는다", () => {
    rerender(<P data-testid={"Root"} $mode={"Load"} />);
    const Root = screen.getByTestId("Root");
    expect(Root.tagName).toEqual("DIV");
    expect(Root).toHaveAttribute("data-fx-mode", "Load");
  });
  test("Read 모드 일 경우 루트는 p 태그로 랜더링 되고 data-fx-mode=Read 속성을 갖는다", () => {
    rerender(<P data-testid={"Root"} $mode={"Read"} />);
    const Root = screen.getByTestId("Root");
    expect(Root.tagName).toEqual("P");
    expect(Root).toHaveAttribute("data-fx-mode", "Read");
  });
  test("Write 모드 일 경우 루트는 input 태그로 랜더링 되고 data-fx-mode=Write 속성을 갖는다", () => {
    rerender(<P data-testid={"Root"} $mode={"Write"} />);
    const Root = screen.getByTestId("Root");
    expect(Root.tagName).toEqual("INPUT");
    expect(Root).toHaveAttribute("data-fx-mode", "Write");
  });
});
