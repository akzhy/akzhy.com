import { css } from "@flairjs/client";
import logoBlack from "@src/images/logo-black.png";
import logoWhite from "@src/images/logo-white.png";
import { navbarLinks } from "@src/utils/navlinks";
import clsx from "clsx";
import { createSignal, onCleanup, onMount } from "solid-js";
import { Img } from "../Atoms/Img";
import { MobileNav } from "./MobileNav";
import { ThemeSwitcher } from "./ThemeSwitcher";

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
        class={clsx("nav", {
          "fixed-hidden": !fixedHeaderShown(),
        })}
      >
        <div class="desktop">
          <ul class="main-nav">{navItems}</ul>
          <div class="theme-switcher-container">
            <ThemeSwitcher />
          </div>
        </div>
        <div class="mobile">
          <MobileNav rootPath={rootPath()} />
        </div>
      </nav>
      <div class="spacer"></div>
    </>
  );
}

Header.flair = css`
  .nav {
    padding: 1rem 0;
    position: fixed;
    background: var(--bg__primary);
    width: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    transition: transform 0.3s;

    &:global(.fixed-hidden) {
      transform: translate(0, -120px);
    }

    @screen md {
      padding: 1.5rem 0;
    }

    @screen lg {
      padding: 2rem 0;
      position: relative;
    }
  }

  .spacer {
    height: 8rem;

    @screen lg {
      height: 0rem;
    }
  }

  .desktop {
    display: none;

    @screen lg {
      display: block;
    }
  }

  .main-nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile {
    display: block;

    @screen lg {
      display: none;
    }
  }

  .theme-switcher-container {
    display: none;
    position: absolute;
    top: 50%;
    right: 4rem;
    transform: translate(0, -50%);

    @screen lg {
      display: block;
    }
  }
`;

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
    class={clsx("nav-item", {
      "nav-item--active": active,
      "has-image": isImg,
    })}
  >
    <a
      class="nav-item-link"
      href={href}
      title={title.toUpperCase()}
      data-astro-prefetch
    >
      {!isImg ? (
        <>{title.toUpperCase()}</>
      ) : (
        <div class="logo-container nav-logo-container">
          <Img source={logoBlack} alt="akzhy" class="logo-dark nav-logo-dark" />
          <Img source={logoWhite} alt="akzhy" class="logo-light nav-logo-light" />
        </div>
      )}
    </a>
  </li>
);

NavItem.flair = css`
  .nav-item {
    min-width: 8rem;
    letter-spacing: 0.1em;
    text-align: center;
    padding-top: 0.5rem;
    margin: 0 1.25rem;
    list-style: none;

    &:global(.has-image) {
      .nav-item-link {
        &::before,
        &::after {
          display: none;
        }
      }
    }

    .nav-item--active a::after,
    .nav-item--active a::before {
      width: 95%;
    }
  }

  .nav-item-link {
    position: relative;
    padding: 0 0.75rem;
    color: var(--fg__primary);
    text-decoration: none;
    font-weight: 900;

    &.nav-item-link--logo {
      &::after,
      &::before {
        display: none;
      }
    }

    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 4px;
      width: 0%;
      bottom: 0;
      left: 0;
      transition: width 0.3s;
      background-color: var(--primary);
    }

    &::after {
      left: auto;
      right: 0;
      margin-bottom: -4px;
      background-color: var(--secondary);
    }

    &:hover img,
    &:focus img {
      filter: brightness(0.7) sepia(0.5) saturate(8) hue-rotate(277deg);
    }

    &:hover img.nav-logo-dark,
    &:focus img.nav-logo-dark {
      filter: invert(100%) brightness(0.7) sepia(0.5) saturate(111)
        hue-rotate(170deg);
    }

    &:hover::after,
    &:hover::before,
    &:focus::after,
    &:focus::before {
      width: 95%;
    }
  }

  .nav-logo-container {
    width: 8rem;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
