import logoBlack from "@src/images/logo-black.png";
import logoWhite from "@src/images/logo-white.png";
import { navbarLinks } from "@src/utils/navlinks";
import clsx from "clsx";
import { createSignal, onCleanup, onMount } from "solid-js";
import { Img } from "../Atoms/Img";
import styles from "./header.module.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [fixedHeaderShown, setFixedHeaderShown] = createSignal(true);
  const [rootPath, setRootPath] = createSignal("/");

  let prevScroll = 0;
  let onScrollFunction: null | (() => void) = null;

  const navItems = navbarLinks.map((i) => (
    <NavItem
      href={i.href}
      title={i.title}
      isImg={i.href === "/"}
      active={rootPath() === i.href.substring(1)}
    />
  ));

  onMount(() => {
    setRootPath(window.location.pathname.split("/")[1]);

    /**
     * On small screen devices, hide the fixed header while scrolling down and show it back when scrolling up
     */
    onScrollFunction = () => {
      if (window.scrollY > 300 && window.scrollY < prevScroll) {
        if (!fixedHeaderShown()) {
          setFixedHeaderShown(true);
        }
      } else if (fixedHeaderShown() && window.scrollY > 300) {
        setFixedHeaderShown(false);
      } else if (!fixedHeaderShown() && window.scrollY < 300) {
        setFixedHeaderShown(true);
      }
      prevScroll = window.scrollY;
    };

    // if (window.screen.width < 1024) {
    window.addEventListener("scroll", onScrollFunction);
    prevScroll = window.scrollY;
    // }
  });

  onCleanup(() => {
    if (onScrollFunction) {
      window.removeEventListener("scroll", onScrollFunction);
    }
  });

  return (
    <>
      <nav
        class={clsx(styles.nav, {
          ["fixed-hidden"]: !fixedHeaderShown(),
        })}
      >
        <div class={styles.desktop}>
          <ul class={styles["main-nav"]}>{navItems}</ul>
          <div class={styles["theme-switcher-container"]}>
            <ThemeSwitcher />
          </div>
        </div>
        <div class={styles.mobile}>
          <MobileNav rootPath={rootPath()} />
        </div>
      </nav>
      <div class={styles.spacer}></div>
    </>
  );
}

const NavItem = ({
  href,
  title,
  isImg = false,
  active = false,
}: {
  href: string;
  title: string;
  isImg?: boolean;
  active?: boolean;
}) => (
  <li
    class={clsx(styles["nav-item"], {
      [styles["nav-item--active"]]: active,
      "has-image": isImg,
    })}
  >
    <a
      class={styles["nav-item-link"]}
      href={href}
      title={title.toUpperCase()}
      data-astro-prefetch
    >
      {!isImg ? (
        <>{title.toUpperCase()}</>
      ) : (
        <div class={styles["logo-container"]}>
          <Img source={logoBlack} alt="akzhy" class="logo-dark" />
          <Img source={logoWhite} alt="akzhy" class="logo-light" />
        </div>
      )}
    </a>
  </li>
);
