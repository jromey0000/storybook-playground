import type { Meta, StoryObj } from '@storybook/react';

export type { Meta, StoryObj };

import { Button } from './button';

// shared across all stories
const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'medium',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'select',
      description: 'Text to display on button',
      options: ['Button', 'Cancel'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
