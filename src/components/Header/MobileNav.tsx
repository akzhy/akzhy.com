import { css } from "@flairjs/client";
import { HamburgerIcon } from "@src/icons/Hamburger";
import logoBlack from "@src/images/logo-black.png";
import logoWhite from "@src/images/logo-white.png";
import { sitenavLinks } from "@src/utils/navlinks";
import clsx from "clsx";
import { createSignal, For } from "solid-js";
import { Img } from "../Atoms/Img";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const MobileNav = (props: { rootPath: string }) => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  return (
    <div class="mobile-topbar">
      <button
        aria-label="Toggle Sidebar"
        class="hamburger-btn"
        type="button"
        onClick={() => {
          setSidebarOpen(true);
        }}
      >
        <HamburgerIcon size={32} />
      </button>
      <div class="nav-logo-container">
        <a
          class="nav-item-link nav-item-link--logo"
          href="/"
          title="Home"
          data-astro-prefetch
        >
          <Img source={logoBlack} alt="akzhy" class="logo-dark" />
          <Img source={logoWhite} alt="akzhy" class="logo-light" />
        </a>
      </div>
      <div
        class={clsx("sidebar", {
          "sidebar--open": sidebarOpen(),
        })}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            setSidebarOpen(false);
          }
        }}
        aria-hidden={!sidebarOpen()}
      >
        <div class="sidebar-body">
          <ul>
            <For each={sitenavLinks}>
              {({ href, title }) => (
                <li
                  class={clsx("nav-item", "nav-item-mobile", {
                    "nav-item--active": href.substring(1) === props.rootPath,
                  })}
                >
                  <a
                    href={href}
                    class="nav-item-link"
                    title={title}
                    data-astro-prefetch
                  >
                    {title}
                  </a>
                </li>
              )}
            </For>
            <li class="nav-item nav-item-mobile">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

MobileNav.flair = css`
  .mobile-topbar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hamburger-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translate(0, -50%);
    color: var(--fg__primary);

    svg {
      display: block;
    }
  }

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    visibility: hidden;
    transition: visibility 0.25s ease;

    &.sidebar--open {
      visibility: visible;

      .sidebar-body {
        transform: translate(0, 0);
      }
    }
  }

  .sidebar-body {
    position: absolute;
    width: 300px;
    min-width: 65%;
    max-width: 80%;
    height: 100%;
    background: var(--bg__secondary);
    transform: translate(-100%, 0);
    transition: transform 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

  .nav-item-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
`;
