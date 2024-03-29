import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { ENTRY } from "packages/idea/ENTRY/ENTRY";
import { Default, WithFormat } from "packages/idea/ENTRY/ENTRY.stories";
import { Component } from "packages/idea/util/util";

describe("랜더링", () => {
  let renderResult: RenderResult;
  let rootEl: ChildNode | null;
  const CallBack = {
    Root: Component("Entry"),
    Key: Component("Key"),
    Value: Component("Value"),
  };
  beforeEach(() => {
    renderResult = render(<ENTRY {...(Default.args as ENTRY)} {...CallBack} />);
    rootEl = renderResult.container.firstChild;
  });

  describe("Default", () => {
    test("스냅샷", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-entry="true"
            data-testid="Entry"
          >
            <div
              data-key="name"
              data-testid="Key"
            >
              name
            </div>
            <div
              data="유일환"
              data-testid="Value"
              data-value="유일환"
            >
              유일환
            </div>
          </div>
        </DocumentFragment>
      `);
    });
    test("Entry 콜백이 루트 엘레멘트로 렌더링된다.", () => {
      expect(screen.getByTestId("Entry")).toEqual(rootEl);
    });
    test("Entry 는 $data 를 렌더링한다.", () => {
      const Entry = screen.getByTestId("Entry");
      expect(Entry).toHaveTextContent("name유일환");
    });
    test("$data[0]은 Key 컴포넌트로 $data[1]은 Value 컴포넌트로 렌더린된다", () => {
      const Key = screen.getByTestId("Key");
      const Value = screen.getByTestId("Value");
      expect(Key).toHaveTextContent("name");
      expect(Value).toHaveTextContent("유일환");
    });
  });

  describe("WithFormat", () => {
    beforeEach(() => {
      const { rerender } = renderResult;
      rerender(<ENTRY {...WithFormat.args} {...CallBack} />);
    });
    test("스냅샷", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-entry="true"
            data-testid="Entry"
          >
            <div
              data-key="name"
              data-testid="Key"
              label="이름"
            >
              이름
            </div>
            <div
              data="유일환"
              data-testid="Value"
              data-value="유일환"
            >
              나의 이름은 유일환
            </div>
          </div>
        </DocumentFragment>
      `);
    });
    test("$keyLabel 은 Key 에 렌더링된다.", () => {
      expect(screen.getByTestId("Key")).toHaveTextContent("이름");
    });
    test("$valueLabel 은 Value 에 렌더링된다.", () => {
      expect(screen.getByTestId("Value")).toHaveTextContent(
        "나의 이름은 유일환"
      );
    });
  });
});
// fxtsxTest(ENTRY, "data-fx-entry");
