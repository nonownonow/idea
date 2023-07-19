import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { createRef } from "react";
import type { SECTIONINGProps } from "./SECTIONING";
import { SECTIONING } from "./SECTIONING";
import { ComponentWithoutRef, ComponentWithRef } from "../util/util";

describe("SECTION", () => {
  let renderResult: RenderResult;
  const $Section = ComponentWithRef<HTMLElement>("$Section");
  const $Heading = ComponentWithoutRef("$Heading");
  const sectionWithSubTitle: SECTIONINGProps = {
    title: "myTitle",
    level: 1,
    contents: "현재 레벨의 내용",
    subTitle: "해딩의 보조 내용",
    $Section,
    $Heading,
  };

  const ref = createRef<any>();
  beforeEach(() => {
    renderResult = render(
      <SECTIONING {...sectionWithSubTitle} ref={ref}>
        <section>
          <h2>하위 레벨의 내용</h2>
        </section>
      </SECTIONING>
    );
  });
  describe("렌더링", () => {
    test("루트 컴포넌트 조각은 $Section 이며 data-fx-section 프로퍼티를 전달 받는다. 컴포넌트 조각 $Section, $Heading 에 적절한 프로퍼티를 전달한다", () => {
      const { asFragment } = renderResult;
      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            data-fx-sectioning="true"
            data-testid="$Section"
          >
            <div
              data-testid="$Heading"
              level="1"
              subtitle="해딩의 보조 내용"
              title="myTitle"
            />
            <div
              data-fx-sectioning-contents="true"
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
