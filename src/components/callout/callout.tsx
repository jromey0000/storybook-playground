import type { PropsWithChildren } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { variants, type CalloutVariants } from './callout-variants';
import { Icon } from '../icon';

type CalloutProps = PropsWithChildren<{
  title: string;
  leadingIcon?: string;
}> &
  VariantProps<typeof variants> &
  CalloutVariants;

export const Callout = ({
  title,
  variant,
  leadingIcon,
  children,
}: CalloutProps) => (
  <div className={variants({ variant })}>
    <h2 className="font-semibold">
      <span className="flex justify-content items-center">
        {leadingIcon && <Icon name={leadingIcon} className="mr-2" />} {title}
      </span>
    </h2>
    <p>{children}</p>
  </div>
);
