import {
  Pencil,
  CircleAlert,
  CircleCheck,
  Angry,
  TriangleAlert,
  type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  primary: Pencil,
  information: CircleAlert,
  success: CircleCheck,
  warning: Angry,
  danger: TriangleAlert,
};

type IconProps = {
  name: keyof typeof icons;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 16, className }: IconProps) {
  const IconComponent = icons[name];
  return <IconComponent size={size} className={className} />;
}
