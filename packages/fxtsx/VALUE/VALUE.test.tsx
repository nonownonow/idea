import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import type { CallbackComp } from "fxtsx/VALUE/VALUE";
import { VALUE } from "fxtsx/VALUE/VALUE";
import { fxtsxTest } from "fxtsx/util/FxtsxTest";
import { Component } from "fxtsx/util/util";
import { Default } from "fxtsx/VALUE/VALUE.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  let rerender: RenderResult["rerender"];
  let rootEl: ChildNode | null;
  const LOAD = Component("LOAD");
  const READ = Component("READ");
  const WRITE = Component("WRITE");
  beforeEach(() => {
    renderResult = render(
      <VALUE Load={LOAD} Read={READ} Write={WRITE} {...Default.args} />
    );
    rootEl = renderResult.container.firstChild;
    rerender = renderResult.rerender;
  });
  test("스냅샷", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-mode="Read"
          data-fx-value="true"
          data-testid="READ"
        />
      </DocumentFragment>
    `);
  });
  test("$value 프로퍼티를 받아서 루트의 children 으로 랜더링한다", () => {
    expect(rootEl).toHaveTextContent("12");
  });
  test("$mode 가 LOAD 일 때 LOAD 콜백을 랜더링한다", () => {
    const { rerender } = renderResult;
    rerender(<VALUE $mode={"Load"} Load={LOAD} />);
    const LOADComp = screen.getByTestId("LOAD");
    rootEl = renderResult.container.firstChild;
    expect(rootEl).toEqual(LOADComp);
  });
  test("$mode 가 READ 일 때 READ 콜백을 랜더링한다", () => {
    const { rerender } = renderResult;
    rerender(<VALUE $mode={"Read"} Read={READ} />);
    const READComp = screen.getByTestId("READ");
    rootEl = renderResult.container.firstChild;
    expect(rootEl).toEqual(READComp);
  });
  test("$mode 가 WRITE 일 때 WRITE 콜백을 랜더링한다", () => {
    const { rerender } = renderResult;
    rerender(<VALUE $mode={"Write"} Write={WRITE} />);
    const WRITEComp = screen.getByTestId("WRITE");
    rootEl = renderResult.container.firstChild;
    expect(rootEl).toEqual(WRITEComp);
  });
  test("콜백 컴포넌트로 jsxElement 이름이 들어오면 해단 element 로 렌더링된다", () => {
    const ReadComp: CallbackComp = "p";
    rerender(<VALUE $mode={"Read"} Read={ReadComp} />);
  });
});

fxtsxTest(VALUE, "data-fx-value");
