import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title: 'An important title',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt aliquam sollicitudin. Integer interdum purus ut lorem tristique, et pulvinar purus commodo. Morbi eget dolor semper, rhoncus est id, convallis nibh. Ut sagittis lorem arcu, sit amet rutrum tellus elementum sit amet. Suspendisse fringilla nibh vel ipsum cursus maximus. Phasellus quam turpis, rhoncus sed tellus eget, semper egestas metus. Integer at enim neque.',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'primary',
        'information',
        'success',
        'warning',
        'danger',
      ],
      control: 'select',
    },
    leadingIcon: {
      options: ['', 'primary', 'information', 'success', 'warning', 'danger'],
      control: 'select',
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    leadingIcon: 'primary',
  },
};

export const Information: Story = {
  args: {
    variant: 'information',
    leadingIcon: 'information',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    leadingIcon: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    leadingIcon: 'warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    leadingIcon: 'danger',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex justify-between items-center gap-2">
      <Callout title="Default" variant="default">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        aliquam sollicitudin. Integer interdum purus ut lorem tristique, et
        pulvinar purus commodo. Morbi eget dolor semper, rhoncus est id,
        convallis nibh. Ut sagittis lorem arcu, sit amet rutrum tellus elementum
        sit amet. Suspendisse fringilla nibh vel ipsum cursus maximus. Phasellus
        quam turpis, rhoncus sed tellus eget, semper egestas metus. Integer at
        enim neque.
      </Callout>
      <Callout title="Primary" variant="primary" leadingIcon="primary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        aliquam sollicitudin. Integer interdum purus ut lorem tristique, et
        pulvinar purus commodo. Morbi eget dolor semper, rhoncus est id,
        convallis nibh. Ut sagittis lorem arcu, sit amet rutrum tellus elementum
        sit amet. Suspendisse fringilla nibh vel ipsum cursus maximus. Phasellus
        quam turpis, rhoncus sed tellus eget, semper egestas metus. Integer at
        enim neque.
      </Callout>
      <Callout
        title="Information"
        variant="information"
        leadingIcon="information">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        aliquam sollicitudin. Integer interdum purus ut lorem tristique, et
        pulvinar purus commodo. Morbi eget dolor semper, rhoncus est id,
        convallis nibh. Ut sagittis lorem arcu, sit amet rutrum tellus elementum
        sit amet. Suspendisse fringilla nibh vel ipsum cursus maximus. Phasellus
        quam turpis, rhoncus sed tellus eget, semper egestas metus. Integer at
        enim neque.
      </Callout>
      <Callout title="Success" variant="success" leadingIcon="success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        aliquam sollicitudin. Integer interdum purus ut lorem tristique, et
        pulvinar purus commodo. Morbi eget dolor semper, rhoncus est id,
        convallis nibh. Ut sagittis lorem arcu, sit amet rutrum tellus elementum
        sit amet. Suspendisse fringilla nibh vel ipsum cursus maximus. Phasellus
        quam turpis, rhoncus sed tellus eget, semper egestas metus. Integer at
        enim neque.
      </Callout>
      <Callout title="Warning" variant="warning" leadingIcon="warning">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        aliquam sollicitudin. Integer interdum purus ut lorem tristique, et
        pulvinar purus commodo. Morbi eget dolor semper, rhoncus est id,
        convallis nibh. Ut sagittis lorem arcu, sit amet rutrum tellus elementum
        sit amet. Suspendisse fringilla nibh vel ipsum cursus maximus. Phasellus
        quam turpis, rhoncus sed tellus eget, semper egestas metus. Integer at
        enim neque.
      </Callout>
      <Callout title="Danger" variant="danger" leadingIcon="danger">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        aliquam sollicitudin. Integer interdum purus ut lorem tristique, et
        pulvinar purus commodo. Morbi eget dolor semper, rhoncus est id,
        convallis nibh. Ut sagittis lorem arcu, sit amet rutrum tellus elementum
        sit amet. Suspendisse fringilla nibh vel ipsum cursus maximus. Phasellus
        quam turpis, rhoncus sed tellus eget, semper egestas metus. Integer at
        enim neque.
      </Callout>
    </div>
  ),
  // hide table controls
  argTypes: {
    title: { table: { disable: true } },
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    leadingIcon: { table: { disable: true } },
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
