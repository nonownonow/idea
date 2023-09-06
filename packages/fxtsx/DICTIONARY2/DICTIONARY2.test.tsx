import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { DICTIONARY } from "./DICTIONARY";
import { createRef } from "react";
import { Default } from "fxtsx/DICTIONARY2/DICTIONARY.stories";
import { Component } from "fxtsx/util/util";
import { ENTRY } from "fxtsx/ENTRY2/ENTRY";

describe("랜더링", () => {
  let renderResult: RenderResult;
  const ref = createRef();
  const callBack = {
    Root: Component("Dictionary"),
    Entry: (p: ENTRY) => (
      <ENTRY
        Root={Component("Entry")}
        Key={Component("Key")}
        Value={Component("Value")}
        {...p}
      />
    ),
  };
  beforeEach(() => {
    renderResult = render(
      <DICTIONARY {...Default.args} ref={ref} {...callBack} />
    );
  });
  test("object 타입의 데이터를 구조화하여 요구사항에 맞게 랜더링한다", () => {
    const { asFragment } = renderResult;

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          data-fx-dictionary="true"
          data-fx-list="true"
          data-testid="Dictionary"
        >
          <div
            data-fx-entry="true"
            data-testid="Entry"
          >
            <div
              data="keyA"
              data-key="keyA"
              data-testid="Key"
              label="keyA"
            >
              keyA
            </div>
            <div
              data="ValueA"
              data-testid="Value"
              data-value="ValueA"
              label="ValueA"
            >
              ValueA
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-testid="Entry"
          >
            <div
              data="keyD"
              data-key="keyD"
              data-testid="Key"
              label="keyD"
            >
              keyD
            </div>
            <div
              data="ValueD"
              data-testid="Value"
              data-value="ValueD"
              label="값: ValueD"
            >
              값: ValueD
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-testid="Entry"
          >
            <div
              data="keyB"
              data-key="keyB"
              data-testid="Key"
              label="키B"
            >
              키B
            </div>
            <div
              data="ValueB"
              data-testid="Value"
              data-value="ValueB"
              label="[object Object]"
            >
              <em>
                2번째 ValueB
              </em>
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-testid="Entry"
          >
            <div
              data="keyA"
              data-key="keyA"
              data-testid="Key"
              label="[object Object]"
            >
              *
              <em>
                keyA
              </em>
              *
            </div>
            <div
              data="ValueA"
              data-testid="Value"
              data-value="ValueA"
              label="값: ValueA"
            >
              값: ValueA
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-testid="Entry"
          >
            <div
              data="keyD"
              data-key="keyD"
              data-testid="Key"
              label="[object Object]"
            >
              keyD!!
            </div>
            <div
              data="ValueD"
              data-testid="Value"
              data-value="ValueD"
              label="값: ValueD"
            >
              값: ValueD
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-testid="Entry"
          >
            <div
              data="keyE"
              data-key="keyE"
              data-testid="Key"
              label="[object Object]"
            >
              *
              <em>
                keyE
              </em>
              *
            </div>
            <div
              data="ValueE"
              data-testid="Value"
              data-value="ValueE"
              label="값: ValueE"
            >
              값: ValueE
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  test("루트는 Dictionary 콜백으로 랜더링한다", () => {
    expect(screen.getByTestId("Dictionary")).toHaveAttribute(
      "data-fx-dictionary"
    );
  });
  test("루트는 ref 를 받아서 랜더링한다", () => {
    expect(ref.current).toHaveAttribute("data-fx-dictionary");
  });

  test("키는 Key 콜백으로 랜더링한다", () => {
    expect(screen.getAllByTestId("Key")[0]).toHaveTextContent("keyA");
  });
  test("값은 Value 콜백으로 랜더링한다", () => {
    expect(screen.getAllByTestId("Value")[0]).toHaveTextContent("ValueA");
  });
  test("각 entry 는  keys 프로퍼티에 의해 순서와 표시여부가 결정된다.", () => {
    const { $keys, $data } = Default.args;
    $keys?.forEach((v, i) => {
      expect(screen.getAllByTestId("Value")[i]).toHaveTextContent(
        $data[v] as any
      );
      expect(screen.getAllByTestId("Value")[i]).not.toHaveTextContent("ValueC");
    });
  });
  test("전체 키는 keyFormat 으로 포멧팅 된다.", () => {
    expect(screen.getAllByTestId("Key")[5]).toContainHTML("<em>keyE</em>");
  });
  test("개별 키는 keyFormats 로 포멧팅 된다.", () => {
    expect(screen.getAllByTestId("Key")[4]).toContainHTML("keyD!!");
  });
  /*  describe("keys 프로퍼티에 존재하지 않는 키를 추가하면", () => {
    test.todo("Value 콜백은 undefined 를 랜더링한다.");
    test.todo(
      "존재하지 않는 키에대한 keyFormat 을 지정해주어서 undefined 대신 특정 키를 랜더링 해줄 수 있다. "
    );
  });*/
  //todo: 데이터에 직접 특정 계산된 키를 지정해줄 수 있다 -> list 의 format 이용하여 object 에 직접 키:값을 추가한다.
  //todo: 데이터에는 존재하지 않아야 하지만, 랜더링에만 존재하는 키:값 이 있다면 keys 에 새로운 키를 추가하고 keyFormat, valueFormat 을 이용하여 해당 키의 키와 값을 추가한다.
  //Entry 에서는  format 된 값을 child 로 받아서 처리한다. value 에서는 format 되지 않은 값이 전달된다. 콜백 컴포넌트에서는 태그를 구현해야 하는 명세를 따라야 한다. 콜백 콤퍼넌트에서는 구조에 대한 포멧을 위해 존재한다. 예) dataFrame 에서 object 를 포메팅하는 Dictionary 를 받아서 구조를 구현하는 것은 콜백 콤퍼넌트에서 이뤄진다. 그러나  Dictionary 를 a 테그로 감싸는 것은 format 에서 이뤄진다. 즉 불변하는 포맷은 콜백 컴포넌트에서, 가변하는 포멧은 콜백 함수 format 에서 처리한다.
  // format 은 명세에 대한 고민 없이 값 자체만 변경하면된다. format 콜백 함수는 값에 대한 포멧을 위해 존재한다.
  /*  test("전체 값은 valueFormat 프로퍼티로 포멧팅 된다.", () => {
    expect(screen.getAllByTestId("Value")[1]).toHaveTextContent("값: ValueD");
  });
  test("각 값은 valueFormat 프로퍼티로 포멧팅 된다.", () => {
    expect(screen.getAllByTestId("Value")[2]).toContainHTML(
      "<em>2번째 ValueB</em>"
    );
  });*/
});
// fxtsxTest(DICTIONARY, "data-fx-dictionary");
