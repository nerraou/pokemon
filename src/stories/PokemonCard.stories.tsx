import PokemonCard from "@molecules/PokemonCard";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PokemonCard> = {
  title: "PokemonCard/PokemonCard",
  component: PokemonCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PokemonCard>;

export const Default: Story = {
  args: {
    name: "pikachu",
  },
};
