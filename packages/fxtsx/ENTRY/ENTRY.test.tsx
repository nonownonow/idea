import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { ENTRY } from "fxtsx/ENTRY/ENTRY";
import { Component } from "fxtsx/util/util";
import { Default } from "fxtsx/ENTRY/ENTRY.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  let rootEl: ChildNode | null;
  const Entry = Component("Entry");
  const Key = Component("Key");
  const Value = Component("Value");

  beforeEach(() => {
    renderResult = render(
      <ENTRY
        data-testid={"ENTRY"}
        {...(Default.args as ENTRY)}
        Entry={Entry}
        Key={Key}
        Value={Value}
      />
    );
    rootEl = renderResult.container.firstChild;
  });
  test("의도에 맞게 랜더링된다", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-testid="ENTRY"
        >
          <div
            data-key="k"
            data-testid="Key"
          >
            k
          </div>
          <div
            data-testid="Value"
            value="v"
          >
            v
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    test("Entry 콜백이 루트 엘레멘트로 렌더링된다.", () => {
      expect(screen.getByTestId("ENTRY")).toEqual(rootEl);
    });
    test("Key 는 Entry 의 첫번째 자식으로 Value 는 두번째 자식으로 렌더링된다.", () => {
      const Entry = rootEl as HTMLElement;
      const firstElement = [...Entry?.children][0] as HTMLElement;
      const secondElement = [...Entry?.children][1] as HTMLElement;
      expect(firstElement.dataset.testid).toEqual("Key");
      expect(secondElement.dataset.testid).toEqual("Value");
    });
  });
  test("$key, $value 프로퍼티를 받아서 Key 와 Value 콜백으로 랜더링한다.", () => {
    expect(screen.getByTestId("Key")).toHaveTextContent("k");
    expect(screen.getByTestId("Value")).toHaveTextContent("v");
  });
  test("Entry 콜백은 $key 프로퍼티 값을 data-key 프로퍼티로 받는다", () => {
    expect(screen.getByTestId("Key")).toHaveAttribute("data-key", "k");
  });
});
// fxtsxTest(ENTRY, "data-fx-entry");
