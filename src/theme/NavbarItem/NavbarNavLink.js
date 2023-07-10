import Link from '@docusaurus/Link'
import { isRegexpStringMatch } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'

import { Svgs } from '@site/static/img/icons/Svgs'
import { useTestnetModal } from '@site/src/hooks/useTestnetModal'
import { useColor } from '../Contexts/color'

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  icon, // customized, See Svgs
  description, // customized (type: string)
  isButton, // customized (type: boolean)
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}) {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to)
  const activeBaseUrl = useBaseUrl(activeBasePath)
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true })
  // const isExternalLink = label && href && !isInternalUrl(href)

  const { onOpen } = useTestnetModal()
  const { color } = useColor()

  const primaryColor = color === 'dark' ? '#ffffff' : '#000000'
  const invertedColor = color === 'dark' ? '#000000' : '#ffffff'

  const Svg = Svgs[icon]
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <>
            <div className="flex gap-3">
              {icon && Svg && (
                <div>
                  <Svg fill={primaryColor} role="img" src={useBaseUrl(icon)} />
                </div>
              )}
              <div>
                <p className={`m-0 text-lg  ${isButton ? 'inverted' : 'primary'}`}>{label}</p>
                {description && (
                  <p className="mt-2 mb-0 text-base opacity-50 primary">{description}</p>
                )}
              </div>
            </div>

            {/* {isExternalLink && (
              <IconExternalLink {...(isDropdownLink && { width: 12, height: 12 })} />
            )} */}
          </>
        )
      }
  if (href) {
    return (
      <Link
        href={prependBaseUrlToHref ? normalizedHref : href}
        {...props}
        className={isButton ? 'btn h-7 lg:h-10 w-[120px] !px-0 lg:w-[168px]' : props.className}
        {...linkContentProps}
        style={{
          backgroundColor: isButton ? primaryColor : undefined,
          color: isButton ? invertedColor : primaryColor
        }}
        onClick={() => {
          if (label === 'Testnet App') {
            onOpen()
          }
        }}
      />
    )
  }
  return (
    <Link
      to={toUrl}
      isNavLink
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl)
      })}
      {...props}
      {...linkContentProps}
    />
  )
}
