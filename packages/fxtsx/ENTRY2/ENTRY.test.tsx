import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";
import { CbComponent } from "fxtsx/util/util";
import { Default } from "fxtsx/ENTRY2/ENTRY.stories";
import Mock = jest.Mock;

describe("랜더링", () => {
  let renderResult: RenderResult;
  let rootEl: ChildNode | null;
  let Entry: Mock;
  let Key: Mock;
  let Value: Mock;

  beforeEach(() => {
    Entry = CbComponent("Entry");
    Key = CbComponent("Key");
    Value = CbComponent("Value");
    renderResult = render(
      <ENTRY
        data-testid={"ENTRY"}
        {...(Default.args as ENTRY)}
        Entry={Entry}
        Key={Key}
        Value={Value}
        $key={"키"}
        $value={"값"}
      />
    );
    rootEl = renderResult.container.firstChild;
  });
  test("의도에 맞게 랜더링된다", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-testid="Entry"
        >
          <div
            data-testid="Key"
          >
            키
          </div>
          <div
            data-testid="Value"
          >
            값
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  describe("구조", () => {
    test("Entry 콜백이 루트 엘레멘트로 렌더링된다.", () => {
      expect(screen.getByTestId("Entry")).toEqual(rootEl);
    });
    test("Key 는 Entry 의 첫번째 자식으로 Value 는 두번째 자식으로 렌더링된다.", () => {
      const Entry = rootEl as HTMLElement;
      const firstElement = [...Entry?.children][0] as HTMLElement;
      const secondElement = [...Entry?.children][1] as HTMLElement;
      expect(firstElement.dataset.testid).toEqual("Key");
      expect(secondElement.dataset.testid).toEqual("Value");
    });
  });
  test("$key, $value 프로퍼티를 받아서 Key 와 Value 콜백의 children 으로 랜더링한다.", () => {
    expect(Key.mock.calls[0][0]).toHaveProperty("children", "키");
    expect(Value.mock.calls[0][0]).toHaveProperty("children", "값");
  });
  test("Entry 콜백은 $key 프로퍼티 값을 data-key 프로퍼티로 받는다", () => {
    expect(Entry.mock.calls[0][0]).toHaveProperty("data-key", "키");
  });
});
// fxtsxTest(ENTRY, "data-fx-entry");
