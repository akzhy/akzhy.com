import { Codepen, GitHub, StackOverflow } from './Icons';
import styles from './socials.module.scss';
import type { JSX } from "astro/jsx-runtime";

export const Socials = () => {
  return (
    <ul class={styles.container}>
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
}

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
      class={styles.item}
      href={url}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </li>
);


