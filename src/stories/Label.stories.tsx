import Label from "@atoms/Label";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Label/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Click me",
  },
};
