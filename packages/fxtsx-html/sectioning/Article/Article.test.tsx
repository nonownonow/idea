import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Article } from "./Article";
import { Component } from "fxtsx/util/util";
import type { SECTIONINGProps } from "fxtsx/SECTIONING/SECTIONING";

describe("Article 랜더링", () => {
  const $Section = Component("$Section");
  const $Heading = Component("$Heading");
  const sectionWithSubTitle: SECTIONINGProps = {
    $title: "myTitle",
    $level: 1,
    $contents: "현재 레벨의 내용",
    $subTitle: "해딩의 보조 내용",
    Sectioning: $Section,
    Heading: $Heading,
  };
  const sectionWithoutSubTitle: SECTIONINGProps = {
    $title: "myTitle",
    $level: 1,
    $contents: "현재 레벨의 내용",
    $subTitle: "해딩의 보조 내용",
    Sectioning: $Section,
    Heading: $Heading,
  };
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Article {...sectionWithoutSubTitle} />);
  });
  test("subTitle 프로퍼티가 없을 때", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <article
          data-fx-sectioning="true"
        >
          <h1>
            myTitle
          </h1>
          <div
            data-fx-sectioning-contents="true"
          >
            현재 레벨의 내용
          </div>
        </article>
      </DocumentFragment>
    `);
  });
  test("subTitle 프로퍼티가 있을 때", () => {
    const { asFragment, rerender } = renderResult;
    rerender(<Article {...sectionWithSubTitle} />);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <article
          data-fx-sectioning="true"
        >
          <h1>
            myTitle
          </h1>
          <div
            data-fx-sectioning-contents="true"
          >
            현재 레벨의 내용
          </div>
        </article>
      </DocumentFragment>
    `);
  });
});
