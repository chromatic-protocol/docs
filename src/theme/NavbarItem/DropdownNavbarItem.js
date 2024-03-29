import { Collapsible, isRegexpStringMatch, useCollapsible } from '@docusaurus/theme-common'
import { isSamePath, useLocalPathname } from '@docusaurus/theme-common/internal'
import NavbarItem from '@theme/NavbarItem'
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink'
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
function isItemActive(item, localPathname) {
  if (isSamePath(item.to, localPathname)) {
    return true
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true
  }
  return false
}
function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname))
}
function DropdownNavbarItemDesktop({
  items,
  position,
  className,
  description, // custom prop
  onClick,
  ...props
}) {
  const dropdownRef = useRef(null)
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return
      }
      setShowDropdown(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('focusin', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('focusin', handleClickOutside)
    }
  }, [dropdownRef])
  return (
    <div
      ref={dropdownRef}
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown
      })}
    >
      <NavbarNavLink
        aria-haspopup="true"
        aria-expanded={showDropdown}
        role="button"
        href={props.to ? undefined : '#'}
        className={clsx('navbar__link flex items-center gap-1 font-sans font-semibold', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            setShowDropdown(!showDropdown)
          }
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <ul
        className={`flex items-stretch font-sans !font-semibold dropdown__menu p-5 rounded-xl border-solid shadow-none background border`}
      >
        <div className="pt-4 pl-2 w-[220px]">
          {props.label && <p className="m-0 text-lg uppercase primary">{props.label}</p>}
          {description && <p className="mt-4 text-base opacity-50 primary">{description}</p>}
        </div>
        <div className="flex flex-col gap-2 pl-4 ml-10 border-r-0 border-solid border-y-0 border-lighter">
          {items.map((childItemProps, i) => (
            <NavbarItem
              isDropdownItem
              activeClassName="dropdown__link--active"
              className="px-3 py-2 rounded-xl primary"
              {...childItemProps}
              key={i}
            />
          ))}
        </div>
      </ul>
    </div>
  )
}
function DropdownNavbarItemMobile({
  items,
  className,
  position, // Need to destructure position from props so that it doesn't get passed on.
  onClick,
  description, // custom prop
  ...props
}) {
  const localPathname = useLocalPathname()
  const containsActive = containsActiveItems(items, localPathname)
  const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
    initialState: () => !containsActive
  })
  // Expand/collapse if any item active after a navigation
  useEffect(() => {
    if (containsActive) {
      setCollapsed(!containsActive)
    }
  }, [localPathname, containsActive, setCollapsed])
  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed
      })}
    >
      <NavbarNavLink
        role="button"
        className={clsx(
          'menu__link menu__link--sublist menu__link--sublist-caret primary cursor-pointer',
          className
        )}
        {...props}
        onClick={(e) => {
          e.preventDefault()
          toggleCollapsed()
        }}
      >
        {props.children ?? props.label}
      </NavbarNavLink>
      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        {items.map((childItemProps, i) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={onClick}
            activeClassName="menu__link--active"
            {...childItemProps}
            key={i}
          />
        ))}
      </Collapsible>
    </li>
  )
}
export default function DropdownNavbarItem({ mobile = false, ...props }) {
  const Comp = mobile ? DropdownNavbarItemMobile : DropdownNavbarItemDesktop
  return <Comp {...props} />
}
