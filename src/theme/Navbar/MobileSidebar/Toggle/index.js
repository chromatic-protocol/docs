import React from 'react'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'
import IconMenu from '@theme/Icon/Menu'
export default function MobileSidebarToggle() {
  const { toggle, shown } = useNavbarMobileSidebar()
  return (
    // hamburger menu button
    <button
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description: 'The ARIA label for hamburger menu button of mobile navigation'
      })}
      aria-expanded={shown}
      className="!px-0 mx-0 navbar__toggle clean-btn w-7 primary justify-center inline-flex lg:!hidden"
      type="button"
    >
      <IconMenu className="w-5" />
    </button>
  )
}
