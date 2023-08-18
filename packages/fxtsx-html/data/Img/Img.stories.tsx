import type { Meta, StoryObj } from "@storybook/react";
import { Img } from "fxtsx-html/data/Img/Img";
import imgSrcM1 from "./fixture/mo-shop-guide-flag-australia.png";
import imgSrcM2 from "./fixture/mo-shop-guide-flag-australia@2x.png";
import imgSrcM3 from "./fixture/mo-shop-guide-flag-australia@3x.png";

const meta = {
  component: Img,
  tags: ["autodocs"],
} satisfies Meta<typeof Img>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    $pcOption: {
      "1x": imgSrcM1,
      "2x": imgSrcM2,
      "3x": imgSrcM3,
    },
    $mobileOption: {
      "1x": imgSrcM1,
      "2x": imgSrcM2,
      "3x": imgSrcM3,
    },
    $minPcWidth: 1108,
    alt: "img",
  },
};
/*
    $data: {
      1x: imgSrcM1,
      2x: imgSrcM2,
      3x: imgSrcM3,
    },
* */
