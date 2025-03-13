import { cva, type VariantProps } from 'class-variance-authority';

export type CalloutVariants = VariantProps<typeof variants>;

export const variants = cva(
  ['p-4', 'rounded-xl', 'border', 'shadow-md', 'space-y-4', 'max-w-[250px]'],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-200',
          'dark:bg-primary-800',
          'text-primary-900',
          'dark:text-primary-50',
          'border-primary-500',
          'dark:border-primary-900',
          'text-primary-900',
          'dark:text-primary-50',
        ],
        information: [
          'bg-information-200',
          'dark:bg-information-800',
          'text-information-900',
          'dark:text-information-50',
          'border-information-500',
          'dark:border-information-800',
        ],
        success: [
          'bg-success-200',
          'dark:bg-success-800',
          'text-success-500',
          'dark:text-success-200',
          'border-success-500',
          'dark:border-success-900',
        ],
        warning: [
          'bg-warning-200',
          'dark:bg-warning-800',
          'text-warning-900',
          'dark:text-warning-200',
          'border-warning-500',
          'dark:border-warning-900',
        ],
        danger: [
          'bg-danger-50',
          'dark:bg-danger-800',
          'text-danger-900',
          'dark:text-danger-50',
          'border-danger-500',
          'dark:border-danger-900',
        ],
        default: [
          'bg-slate-200',
          'dark:bg-slate-600',
          'border-slate-500',
          'dark:border-slate-900',
          'text-slate-900',
          'dark:text-slate-50',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
