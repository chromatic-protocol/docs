import Link from '@docusaurus/Link'
import isInternalUrl from '@docusaurus/isInternalUrl'
import { isRegexpStringMatch, useColorMode } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import IconExternalLink from '@theme/Icon/ExternalLink'
import React from 'react'

const Svgs = {
  github: require('@site/static/img/icons/github.svg').default,
  contract: require('@site/static/img/icons/contract.svg').default,
  sdk: require('@site/static/img/icons/sdk.svg').default,
  twitter: require('@site/static/img/icons/twitter.svg').default,
  gitbook: require('@site/static/img/icons/gitbook.svg').default,
  medium: require('@site/static/img/icons/medium.svg').default
}

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  icon,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}) {
  // TODO all this seems hacky
  // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
  const toUrl = useBaseUrl(to)
  const activeBaseUrl = useBaseUrl(activeBasePath)
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true })
  const isExternalLink = label && href && !isInternalUrl(href)
  const { isDarkTheme } = useColorMode()
  // Link content is set through html XOR label
  const Svg = Svgs[icon]
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <>
            {icon && Svg && (
              <Svg fill={isDarkTheme ? '#ffffff' : '#000000'} role="img" src={useBaseUrl(icon)} />
            )}
            {label}
            {isExternalLink && (
              <IconExternalLink {...(isDropdownLink && { width: 12, height: 12 })} />
            )}
          </>
        )
      }
  if (href) {
    return (
      <Link href={prependBaseUrlToHref ? normalizedHref : href} {...props} {...linkContentProps} />
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
