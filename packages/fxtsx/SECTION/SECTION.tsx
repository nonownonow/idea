import type { ReactNode } from "react";
import React from "react";

export interface SectionProps {
  /**
   * 헤딩의 내용.
   */
  title: string;
  /**
   * 헤딩의 레벨
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * 헤딩의 보조 내용, 이 속성이 전달되면 heading 은 hgroup 을 사용하여 표현된다.
   */
  titleSubContents: ReactNode;
  /**
   * 현재 레벨의 내용
   */
  contents: ReactNode;
  /**
   * 하위 레벨의 내용
   */
  children?: ReactNode;
}
export default function SECTION(props: any) {
  return <div data-testid={"SECTION"}>Section</div>;
}
/*let i = 0;
<Article
    content={<><Heading title={"title"} level={i + 1} /></>}
  <Section
    heading={
      <Heading title={"title"} level={i + 1}>
        <p>sub title</p>
      </Heading>
    }
    content={<></>}
  >
    <Heading />
    <Section
      content={
        <>
          <p></p>
        </>
      }
    ></Section>
  </Section>
</Article>;*/
