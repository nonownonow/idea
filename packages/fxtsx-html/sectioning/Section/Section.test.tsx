import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Section } from "./Section";
import { SectionPropsWithSubtitle } from "./Section.stories";

describe("Section 랜더링", () => {
  let renderResult: RenderResult;

  renderResult = render(<Section {...SectionPropsWithSubtitle} />);
  test("subTitle 프로퍼티가 있을 때", () => {
    const { asFragment } = renderResult;
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <section
          data-fx-sectioning="true"
        >
          <hgroup
            data-fx-heading="true"
          >
            <h1
              data-fx-value="true"
            >
              my-title
            </h1>
            <p>
              서브타이틀 입니다.
            </p>
            <p>
              타이틀에 대한 부연 설명입니다.
            </p>
          </hgroup>
          <div
            data-fx-sectioning-contents="true"
          >
            <p>
              섹션 레벨의 내용입니다.
            </p>
            <p>
              현재 섹션 레벨의 타이틀과 직접적으로 연관된 내용입니다.
            </p>
          </div>
          <section>
            <h2>
              하위 레벨 타이틀
            </h2>
            <p>
              하위 레켈 컨텐츠 입니다.
            </p>
          </section>
        </section>
      </DocumentFragment>
    `);
  });
});
