import type { IconProps } from "@src/utils/types";

export function CalendarIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
      <path d="M16 2v4M8 2v4M3 10h18"></path>
    </svg>
  );
}
