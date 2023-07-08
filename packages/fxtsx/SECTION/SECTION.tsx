import type { FC, ReactNode } from "react";
import React from "react";
import { fxtsx } from "../util/util";
import type { $HEADINGProps } from "../HEADING/HEADING";

export interface $SECTIONProps {
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
  subTitle?: ReactNode;
  /**
   * 현재 레벨의 내용
   */
  contents?: ReactNode;
  /**
   * 하위 레벨의 내용
   */
  children?: ReactNode;
}

export type SECTIONProps = $SECTIONProps & {
  /**
   * 섹션을 구현하는 컨포넌트
   */
  $Section: FC<{
    children?: ReactNode;
  }>;
  $Heading: FC<$HEADINGProps>;
};
export const SECTION = fxtsx<HTMLElement, SECTIONProps>((rootProps) => {
  return (
    <div data-testid={"SECTION"} {...rootProps}>
      Section
    </div>
  );
});

/*fxtsx((rootProps, sectionProps, ref)=>{

})*/
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
