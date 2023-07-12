import { render } from "@testing-library/react";
import { Article } from "./Article";
import { sectionWithoutSubTitle } from "fxtsx/SECTION/SECTION.test";

describe("Article 랜더링", () => {
  let renderResult = render(<Article {...sectionWithoutSubTitle} />);
  test("subTitle 프로퍼티가 없을 때", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <article
          data-fx-section="true"
        >
          <hgroup
            data-fx-heading="true"
          >
            <h1>
              myTitle
            </h1>
            해딩의 보조 내용
          </hgroup>
          <div
            data-fx-section-contents="true"
          >
            현재 레벨의 내용
          </div>
        </article>
      </DocumentFragment>
    `);
  });
  test("subTitle 프로퍼티가 있을 때", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <article
          data-fx-section="true"
        >
          <hgroup
            data-fx-heading="true"
          >
            <h1>
              myTitle
            </h1>
            해딩의 보조 내용
          </hgroup>
          <div
            data-fx-section-contents="true"
          >
            현재 레벨의 내용
          </div>
        </article>
      </DocumentFragment>
    `);
  });
});
