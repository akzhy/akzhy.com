import { HamburgerIcon } from "@src/icons/Hamburger";
import logoBlack from "@src/images/logo-black.png";
import logoWhite from "@src/images/logo-white.png";
import { sitenavLinks } from "@src/utils/navlinks";
import clsx from "clsx";
import { createSignal, For } from "solid-js";
import { Img } from "../Atoms/Img";
import styles from "./header.module.scss";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const MobileNav = (props: { rootPath: string }) => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  return (
    <div class={styles["mobile-topbar"]}>
      <button
        aria-label="Toggle Sidebar"
        class={styles["hamburger-btn"]}
        type="button"
        onClick={() => {
          setSidebarOpen(true);
        }}
      >
        <HamburgerIcon size={32} />
      </button>
      <div class={styles["logo-container"]}>
        <a
          class={clsx(styles["nav-item-link"], styles["nav-item-link--logo"])}
          href="/"
          title="Home"
          data-astro-prefetch
        >
          <Img source={logoBlack} alt="akzhy" class="logo-dark" />
          <Img source={logoWhite} alt="akzhy" class="logo-light" />
        </a>
      </div>
      <div
        class={clsx(styles.sidebar, {
          [styles["sidebar--open"]]: sidebarOpen(),
        })}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            setSidebarOpen(false);
          }
        }}
        aria-hidden={!sidebarOpen()}
      >
        <div class={styles["sidebar-body"]}>
          <ul>
            <For each={sitenavLinks}>
              {({ href, title }) => (
                <li
                  class={clsx(styles["nav-item"], styles["nav-item-mobile"], {
                    [styles["nav-item--active"]]: href.substring(1) === props.rootPath,
                  })}
                >                
                  <a
                    href={href}
                    class={styles["nav-item-link"]}
                    title={title}
                    data-astro-prefetch
                  >
                    {title}
                  </a>
                </li>
              )}
            </For>
            <li class={clsx(styles["nav-item"], styles["nav-item-mobile"])}>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
