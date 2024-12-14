import { navbarLinks } from "@src/utils/navlinks";
import { MenuIcon } from "@src/icons/Menu";
import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import logoBlack from "@src/images/logo-black.png";
import logoWhite from "@src/images/logo-white.png";
import styles from "./header.module.scss";
import { Img } from "../Img";
import clsx from "clsx";

export function Header() {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);
  const [fixedHeaderShown, setFixedHeaderShown] = createSignal(true);
  const [rootPath, setRootPath] = createSignal("/");

  let prevScroll = 0;
  let onScrollFunction: null | (() => void) = null;

  const navItems = navbarLinks.map((i) => (
    <NavItem
      href={i.href}
      title={i.title}
      isImg={i.href === "/"}
      active={rootPath() === i.href.split("/")[1]}
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
        <ul class={styles["main-nav"]}>{navItems}</ul>
        <div
          class="hidden lg:block absolute right-16 top-1/2"
          style={{ transform: "translate(0%, -50%)" }}
        >
          {/* <ThemeSwitcher /> */}
        </div>
        {/* <div class="lg:hidden flex items-center justify-center relative">
          <button
            type="button"
            class="absolute left-8 top-0 w-10 h-10 text-fg-primary flex items-center justify-center pt-3"
            onClick={() => setSidebarOpen(true)}
            title="Open Sidebar"
            aria-haspopup
            aria-expanded={sidebarOpen()}
            aria-controls="sidebar"
            id="sidebar-menu-button"
          >
            <MenuIcon size={34} />
          </button>
          <div>
            <a
              class="logo-container w-32 block"
              href="/"
              title="Home"
              data-astro-prefetch
            >
              <Img source={logoBlack} alt="akzhy" class="logo-dark" />
              <Img source={logoWhite} alt="akzhy" class="logo-light" />
            </a>
          </div>
        </div> */}
      </nav>
      {/* <Sidebar onChange={setSidebarOpen} open={sidebarOpen}>
        <ul class="">
          {sidenavItems.map((item) => (
            <NavItem
              href={item.href}
              title={item.title}
              active={
                location.pathname.split("/")[1] === item.href.split("/")[1]
              }
              key={`sidenav-${item.href}`}
            />
          ))}
          <li class="flex items-center justify-center pt-2">
            <ThemeSwitcher />
          </li>
        </ul>
      </Sidebar> */}
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
      active,
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
