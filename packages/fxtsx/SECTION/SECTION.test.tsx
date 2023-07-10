import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { FC } from "react";
import React from "react";
import type { SECTIONProps } from "./SECTION";
import { SECTION } from "./SECTION";
import { MockComponent } from "../util/util";

describe("SECTION", () => {
  let renderResult: RenderResult;
  const $Section = MockComponent("$Section");
  const $Heading = MockComponent("$Heading");
  const props: SECTIONProps = {
    title: "myTitle",
    level: 1,
    contents: "현재 레벨의 내용",
    subTitle: "해딩의 보조 내용",
    $Section,
    $Heading,
  };
  beforeEach(() => {
    renderResult = render(
      <SECTION {...props}>
        <section>
          <h2>하위 레벨의 내용</h2>
        </section>
      </SECTION>
    );
  });
  beforeAll(() => {});
  describe("렌더링", () => {
    test("루트 컴포넌트는 $Section 이며 data-fx-section 프로퍼티를 전달 받는다.", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-section="true"
            data-testid="$Section"
          >
            <div
              data-testid="$Heading"
              level="1"
              title="myTitle"
            >
              해딩의 보조 내용
            </div>
            <div
              data-fx-section-contents="true"
            >
              현재 레벨의 내용
            </div>
            <section>
              <h2>
                하위 레벨의 내용
              </h2>
            </section>
          </div>
        </DocumentFragment>
      `);
    });
  });
  fxtsxComponentTest(SECTION, props);
});

function fxtsxComponentTest<P>(Component: FC<P>, props: P) {
  describe("fxtsx 컴포넌트 공통 테스트", () => {
    let renderResult: RenderResult;
    beforeEach(() => {
      renderResult = render(
        <Component
          id={"id"}
          className={"class"}
          tabIndex={0}
          style={{ fontSize: "1rem" }}
          data-test={"test"}
          hidden={true}
          {...props}
        />
      );
    });
    test("root props(className, id 등)는 root component 에 전달된다.", () => {
      const { container } = renderResult;
      const rootProps = ["id", "class", "tabindex", "style", "data-test"];

      rootProps.forEach((a) => {
        expect(container.firstChild).toHaveAttribute(a);
      });
    });
  });
}
