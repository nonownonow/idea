import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { LIST } from "fxtsx/LIST/LIST";
import { anyPropsWithRootProps } from "fxtsx/FxTsx/FxTsx.test";
import { ComponentWithoutRef, ComponentWithRef } from "fxtsx/util/util";
import { createRef } from "react";

describe("랜더링", () => {
  let renderResult: RenderResult;
  const List = ComponentWithRef("ListCallback");
  const Item = ComponentWithoutRef("ItemCallback");
  const data = ["item1", "item2", "item3"];
  const ref = createRef<HTMLUListElement>();
  const formatter = (a: any, i: any) => (i === 1 ? `포멧팅한 ${a}` : a);
  beforeEach(() => {
    renderResult = render(
      <LIST
        {...anyPropsWithRootProps}
        List={List}
        Item={Item}
        data={data}
        formatter={formatter}
        ref={ref}
      >
        ListRoot
      </LIST>
    );
  });
  test("Array 타입의 데이터를 구조화하여 요구사항에 맞게 랜더링한다", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="my-class"
          data-fx-list="true"
          data-test="my-data-test"
          data-testid="ListCallback"
          id="my-id"
          no-root-props="my-no-root-props"
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
          ListRoot
        </div>
      </DocumentFragment>
    `);
  });
  test("루트프로퍼티를 루트요소에 전달한다.", () => {
    expect(screen.getByText("ListRoot")).toHaveAttribute("id", "my-id");
  });
  test("루트프로퍼티가 아닌 프로퍼티를 루트요소에 전달한다", () => {
    expect(screen.getByText("ListRoot")).toHaveAttribute(
      "no-root-props",
      "my-no-root-props"
    );
  });
  test("data-fx-list 속성을 루트요소에 전달한다.", () => {
    expect(screen.getByText("ListRoot")).toHaveAttribute("data-fx-list");
  });

  describe("프로퍼티", () => {
    test("루트요소는 List 콜백으로 랜더링한다", () => {
      expect(screen.getByTestId("ListCallback")).toHaveTextContent("ListRoot");
    });
    test("루트요소 List 콜백은 ref 를 받아서 랜더링한다", () => {
      expect(ref.current).toHaveTextContent("ListRoot");
    });
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
