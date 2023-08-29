import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { Default } from "fxtsx/ENTRY2/ENTRY.stories";

describe("랜더링", () => {
  let renderResult: RenderResult;
  let rootEl: ChildNode | null;

  beforeEach(() => {
    renderResult = render(
      <ENTRY data-testid={"ENTRY"} {...(Default.args as ENTRY)} />
    );
    rootEl = renderResult.container.firstChild;
  });
  test("의도에 맞게 랜더링된다", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-entry="true"
          data-key="name"
          data-testid="ENTRY"
        >
          <div
            data-fx-key="true"
          >
            name
          </div>
          <div
            data-fx-value="true"
          >
            유일환
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
      expect(firstElement).toHaveTextContent("name");
      expect(secondElement).toHaveTextContent("유일환");
    });
  });

  test("Entry 콜백은 $key 프로퍼티 값을 data-key 프로퍼티로 받는다", () => {
    const Entry = rootEl as HTMLElement;
    expect(Entry).toHaveTextContent("name유일환");
  });
});
// fxtsxTest(ENTRY, "data-fx-entry");
