import React from 'react'
import clsx from 'clsx'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'
import styles from './styles.module.css'
import { useColor } from '@site/src/theme/Contexts/color'

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  )
}
export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, style }
  } = useThemeConfig()

  const { color } = useColor()

  const mobileSidebar = useNavbarMobileSidebar()
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)
  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation'
      })}
      className={
        clsx(
          'navbar',
          'navbar--fixed-top',
          'h-[70px] px-4 md:px-10 shadow-none',
          'fixed top-0 right-0 bottom-0 left-0 backdrop-blur-xl bg-transparent',
          hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
          {
            'navbar--dark': style === 'dark',
            'navbar--primary': style === 'primary',
            'navbar-sidebar--show': mobileSidebar.shown
          }
        ) + ` ${color}`
      }
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  )
}
