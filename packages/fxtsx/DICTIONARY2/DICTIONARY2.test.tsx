import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { DICTIONARY } from "./DICTIONARY";
import { anyPropsWithRootProps } from "fxtsx/FxTsx/FxTsx.test";
import { createRef } from "react";
import { Default } from "fxtsx/DICTIONARY2/DICTIONARY.stories";

describe.skip("랜더링", () => {
  let renderResult: RenderResult;
  const ref = createRef();
  beforeEach(() => {
    renderResult = render(
      <DICTIONARY
        {...anyPropsWithRootProps}
        {...Default.args}
        ref={ref}
        data-testid={"Dictionary"}
      />
    );
  });
  test("object 타입의 데이터를 구조화하여 요구사항에 맞게 랜더링한다", () => {
    const { asFragment } = renderResult;

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          any="my-any-props"
          class="my-class"
          data-fx-dictionary="true"
          data-fx-list="true"
          data-test="my-data-test"
          data-testid="Dictionary"
          id="my-id"
          style="font-size: 1rem;"
          tab-index="0"
        >
          <div
            data-fx-entry="true"
            data-key="keyA"
          >
            <div
              data-fx-key="true"
            >
              keyA
            </div>
            <div
              data-fx-value="true"
            >
              ValueA
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-key="keyD"
          >
            <div
              data-fx-key="true"
            >
              keyD
            </div>
            <div
              data-fx-value="true"
            >
              값: ValueD
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-key="keyB"
          >
            <div
              data-fx-key="true"
            >
              키B
            </div>
            <div
              data-fx-value="true"
            >
              <em>
                2번째 ValueB
              </em>
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-key="keyA"
          >
            <div
              data-fx-key="true"
            >
              *
              <em>
                keyA
              </em>
              *
            </div>
            <div
              data-fx-value="true"
            >
              값: ValueA
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-key="keyD"
          >
            <div
              data-fx-key="true"
            >
              keyD!!
            </div>
            <div
              data-fx-value="true"
            >
              값: ValueD
            </div>
          </div>
          <div
            data-fx-entry="true"
            data-key="keyE"
          >
            <div
              data-fx-key="true"
            >
              *
              <em>
                keyE
              </em>
              *
            </div>
            <div
              data-fx-value="true"
            >
              값: ValueE
            </div>
          </div>
        </div>
      </DocumentFragment>
    `);
  });
  /*  test("루트는 Dictionary 콜백으로 랜더링한다", () => {
    expect(screen.getByTestId("Dictionary")).toHaveTextContent("Root");
  });*/
  /*  test("루트는 ref 를 받아서 랜더링한다", () => {
    expect(ref.current).toHaveTextContent("Root");
  });*/
  /*test("엔트리는 Entry 콜백으로 랜더링한다", () => {
    expect(screen.getAllByTestId("Item")[0]).toHaveTextContent("keyAValueA");
  });
  test("키는 Key 콜백으로 랜더링한다", () => {
    expect(screen.getAllByTestId("Key")[0]).toHaveTextContent("keyA");
  });
  test("값은 Value 콜백으로 랜더링한다", () => {
    expect(screen.getAllByTestId("Value")[0]).toHaveTextContent("ValueA");
  });
  test("각 entry 는  keys 프로퍼티에 의해 순서와 표시여부가 결정된다.", () => {
    Default.args.$keys?.forEach((v, i) => {
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
  });*/
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
