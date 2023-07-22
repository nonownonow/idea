import type { RenderResult } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { LIST } from "fxtsx/LIST/LIST";
import { anyPropsWithRootProps } from "fxtsx/FxTsx/FxTsx.test";
import { ComponentWithoutRef } from "fxtsx/util/util";

describe("랜더링", () => {
  let renderResult: RenderResult;
  const List = ComponentWithoutRef("ListCallback");
  const Item = ComponentWithoutRef("ItemCallback");
  const data = ["item1", "item2", "item3"];
  beforeEach(() => {
    renderResult = render(
      <LIST {...anyPropsWithRootProps} List={List} Item={Item} data={data}>
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
          data="item1,item2,item3"
          data-fx-list="true"
          data-test="my-data-test"
          data-testid="ListCallback"
          id="my-id"
          no-root-props="my-no-root-props"
          style="font-size: 1rem;"
          tab-index="0"
        >
          ListRoot
        </div>
      </DocumentFragment>
    `);
  });
  /*  test("프로퍼티 중에서 루트프로퍼티만 루트요소에 전달한다.", () => {
    expect(screen.getByText("List")).toHaveAttribute("id", "my-id");
    expect(screen.getByText("List")).not.toHaveAttribute("no-root-props");
  });*/
  test("data-fx-list 속성을 루트요소에 전달한다.", () => {
    expect(screen.getByText("ListRoot")).toHaveAttribute("data-fx-list");
  });

  describe("프로퍼티", () => {
    test("루트요소는 List 콜백으로 랜더링한다", () => {
      expect(screen.getByTestId("ListCallback")).toHaveTextContent("ListRoot");
    });
    /*    test("data 프로퍼티로 전달받은 배열 요소를 ITEM 콜백에 프로퍼티로 전달 하여 랜더링한다.", () => {
      expect(screen.getByText("1"));
    });*/
  });
});
