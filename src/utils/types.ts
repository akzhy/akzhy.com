import type { JSX } from "solid-js/jsx-runtime";

export type IconProps = {
  size?: number;
} & JSX.SvgSVGAttributes<SVGSVGElement>;

export type CommentItem = {
  id: string
  author: string
  date: string
  content: string
  parent_id: string
  avatar: string
  is_post_author: boolean
  children?: CommentItem[]
}