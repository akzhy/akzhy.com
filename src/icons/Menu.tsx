import type { IconProps } from "@src/utils/types";

export function MenuIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M3 12L21 12"></path>
      <path d="M3 6L21 6"></path>
      <path d="M3 18L21 18"></path>
    </svg>
  );
}
