import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "fxtsx-html/data-view/Dialog2/Dialog";
import { userEvent, within } from "@storybook/testing-library";

const meta = {
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

type Story = StoryObj<typeof meta>;
export default meta;

export const Default: Story = {
  args: {
    children: (
      <section data-testid={"Dialog-Contents"}>
        <h1>Dialog Test</h1>
        <p>Dialog 테스트 입니다.</p>
      </section>
    ),
  },
  play: async ({ canvasElement }) => {
    const screen = within(canvasElement);
    const openBtn = screen.getByRole("button", { name: "open" });
    await userEvent.click(openBtn);
    const dialog = (await screen.findByRole("dialog")) as HTMLDialogElement;
    const closeBtn = screen.getByRole("button", { name: "close" });
    await userEvent.click(closeBtn);
    await userEvent.click(closeBtn);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    dialog.close();
  },
};
