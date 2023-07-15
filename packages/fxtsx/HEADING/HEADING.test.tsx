import { HEADING } from "./HEADING";
import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { createRef } from "react";
import { rootProps } from "../FxTsx/FxTsx.test";
import { ComponentWithoutRef, ComponentWithRef } from "../util/util";

describe("HEADING", () => {
  const HComp = ComponentWithRef<HTMLHeadingElement>("$Heading");
  const HgroupComp = ComponentWithoutRef("$Hgroup");
  const ref = createRef<any>();
  let renderResult: RenderResult;

  describe("렌더링", () => {
    beforeEach(() => {
      renderResult = render(
        <HEADING
          {...rootProps}
          title={"Hello Heading!"}
          level={1}
          $H={HComp}
          $Hgroup={HgroupComp}
          ref={ref}
        />
      );
    });

    test("children 이 없을 때 루트 컴포넌트 조각은 $Heading 이며 data-fx-heading 프로퍼티를 전달 받는다. 컴포넌트 조각 $Heading, $Hgroup 에 적절한 프로퍼티를 전달한다", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="my-class"
            data-fx-heading="true"
            data-test="my-data-test"
            data-testid="$Heading"
            id="my-id"
            level="1"
            style="font-size: 1rem;"
            tabindex="0"
            title="Hello Heading!"
          />
        </DocumentFragment>
      `);
    });
    test("children 이 있을 때 루트 컴포넌트 조각은 $Hgroup 이며 data-fx-heading 프로퍼티를 전달 받는다. 컴포넌트 조각 $Heading, $Hgroup 에 적절한 프로퍼티를 전달한다", () => {
      const { asFragment, rerender } = renderResult;
      rerender(
        <HEADING
          {...rootProps}
          title={"Hello Heading!"}
          level={1}
          $H={HComp}
          $Hgroup={HgroupComp}
          ref={ref}
        >
          <p data-testid={"children"}>부제목</p>
        </HEADING>
      );

      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="my-class"
            data-fx-heading="true"
            data-test="my-data-test"
            data-testid="$Hgroup"
            id="my-id"
            style="font-size: 1rem;"
            tabindex="0"
          >
            <div
              data-testid="$Heading"
              level="1"
              title="Hello Heading!"
            />
            <p
              data-testid="children"
            >
              부제목
            </p>
          </div>
        </DocumentFragment>
      `);
    });
  });
});
