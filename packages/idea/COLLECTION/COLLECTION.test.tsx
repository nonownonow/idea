import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { COLLECTION } from "packages/idea/COLLECTION/COLLECTION";
import { anyPropsWithRootProps } from "packages/idea/FxTsx/FxTsx.test";
import { Component } from "packages/idea/util/util";
import { createRef } from "react";

describe("랜더링", () => {
  let renderResult: RenderResult;
  const Root = Component("ListCallback");
  const Item = Component("ItemCallback");
  const data = ["item1", "item2", "item3"];
  const ref = createRef<HTMLUListElement>();
  const formatter = (a: any, i: any) => (i === 1 ? `포멧팅한 ${a}` : a);
  beforeEach(() => {
    renderResult = render(
      <COLLECTION
        {...anyPropsWithRootProps}
        Root={Root}
        Item={Item}
        $data={data}
        $itemFormat={formatter}
        ref={ref}
      >
        ListRoot
      </COLLECTION>
    );
  });
  test("Array 타입의 데이터를 구조화하여 요구사항에 맞게 랜더링한다", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          any="my-any-props"
          class="my-class"
          data-fx-list="true"
          data-test="my-data-test"
          data-testid="ListCallback"
          id="my-id"
          style="font-size: 1rem;"
          tab-index="0"
        >
          <div
            data-testid="ItemCallback"
          >
            item1
          </div>
          <div
            data-testid="ItemCallback"
          >
            포멧팅한 item2
          </div>
          <div
            data-testid="ItemCallback"
          >
            item3
          </div>
        </div>
      </DocumentFragment>
    `);
  });

  describe("프로퍼티", () => {
    /*    test("루트요소는 Root 콜백으로 랜더링한다", () => {
      expect(screen.getByTestId("ListCallback")).toHaveTextContent("ListRoot");
    });
    test("루트요소 Root 콜백은 ref 를 받아서 랜더링한다", () => {
      expect(ref.current).toHaveTextContent("ListRoot");
    });*/
    describe("data 프로퍼티로 배열 요소로 전달받아서", () => {
      test("ITEM 콜백에 프로퍼티로 전달 하여 랜더링한다.", () => {
        expect(screen.getAllByTestId("ItemCallback")[0]).toHaveTextContent(
          "item1"
        );
      });
      test("각 요소를 formatter 프로퍼티로 포멧팅 한다", () => {
        expect(screen.getAllByTestId("ItemCallback")[1]).toHaveTextContent(
          "포멧팅한 item2"
        );
      });
    });
  });
});

// fxtsxTest(LIST, "data-fx-list");
