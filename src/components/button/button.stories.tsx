import { Button } from "./button";
import { type Meta } from "@storybook/react";

const meta = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

export const Default = {
  args: {
    children: "Default button",
  },
};

export const AlertOnClick = {
  args: {
    children: "Alert!",
    onClick: () => alert("Button clicked"),
  },
};

export const ButtonAsLink = {
  args: {
    children: "This is a link",
    as: "a",
    href: "https://google.com",
    target: "_blank",
  },
};
