import type { Meta, StoryObj } from "@storybook/react";
import type { SectionProps } from "./Section";
import { Section } from "./Section";

const meta: Meta<typeof Section> = {
  component: Section,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    level: 1,
    title: "heading",
    children: "Hello Heading!", // @ts-ignore
    subTitle: "서브 타이틀",
  },
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
    },
  },
  play: async () => {},
};

export const SectionRequire: SectionProps = {
  title: "my-title",
  level: 1,
};
export const SectionPropsWithSubtitle: SectionProps = {
  ...SectionRequire,
  subTitle: [
    <p key={1}>서브타이틀 입니다.</p>,
    <p key={2}>타이틀에 대한 부연 설명입니다.</p>,
  ],
  contents: [
    <p key={1}>섹션 레벨의 내용입니다.</p>,
    <p key={2}>현재 섹션 레벨의 타이틀과 직접적으로 연관된 내용입니다.</p>,
  ],
  children: (
    <section>
      <h2>하위 레벨 타이틀</h2>
      <p>하위 레켈 컨텐츠 입니다.</p>
    </section>
  ),
};
