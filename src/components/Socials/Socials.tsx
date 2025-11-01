import { css } from "@flairjs/client";
import type { JSX } from "astro/jsx-runtime";
import { Codepen, GitHub, StackOverflow } from "./Icons";

export const Socials = () => {
  return (
    <ul class="container">
      <Item url="https://codepen.io/akzhy/" title="Codepen">
        <Codepen />
      </Item>
      <Item
        url="https://stackoverflow.com/users/3971928/akshay"
        title="StackOverflow"
      >
        <StackOverflow />
      </Item>
      <Item url="https://github.com/akzhy" title="GitHub">
        <GitHub />
      </Item>
    </ul>
  );
};

Socials.flair = css`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
  }
`;

const Item = ({
  children,
  url,
  title,
}: {
  children: JSX.Element;
  url: string;
  title: string;
}) => (
  <li>
    <a
      class="item"
      href={url}
      title={title}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </li>
);

Item.flair = css`
  .item {
    width: 8rem;
    height: 8rem;
    padding: 1rem;
    margin: 0 1rem;
    display: block;
    border: 2px solid transparent;
    color: var(--fg__primary);

    &:focus {
      border-color: var(--primary);
    }
  }
`;
