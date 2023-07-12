import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { createRef } from "react";
import type { SECTIONProps } from "./SECTION";
import { SECTION } from "./SECTION";
import { ComponentWithoutRef, ComponentWithRef } from "../util/util";

const $Section = ComponentWithRef<HTMLElement>("$Section");
const $Heading = ComponentWithoutRef("$Heading");
export const sectionWithSubTitle: SECTIONProps = {
  title: "myTitle",
  level: 1,
  contents: "현재 레벨의 내용",
  subTitle: "해딩의 보조 내용",
  $Section,
  $Heading,
};
export const sectionWithoutSubTitle: SECTIONProps = {
  title: "myTitle",
  level: 1,
  contents: "현재 레벨의 내용",
  subTitle: "해딩의 보조 내용",
  $Section,
  $Heading,
};
describe("SECTION", () => {
  let renderResult: RenderResult;

  const ref = createRef<any>();
  beforeEach(() => {
    renderResult = render(
      <SECTION {...sectionWithSubTitle} ref={ref}>
        <section>
          <h2>하위 레벨의 내용</h2>
        </section>
      </SECTION>
    );
  });
  describe("렌더링", () => {
    test("루트 컴포넌트 조각은 $Section 이며 data-fx-section 프로퍼티를 전달 받는다. 컴포넌트 조각 $Section, $Heading 에 적절한 프로퍼티를 전달한다", () => {
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
    test("ref 프로퍼티는 section 엘레멘트를 참조한다", () => {
      expect(ref.current.dataset.testid).toEqual("$Section");
    });
  });
});
