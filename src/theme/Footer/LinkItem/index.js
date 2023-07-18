import React from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import isInternalUrl from '@docusaurus/isInternalUrl'
import IconExternalLink from '@theme/Icon/ExternalLink'
// import { useTestnetModal } from '@site/src/hooks/useTestnetModal'
export default function FooterLinkItem({ item }) {
  const { to, href, label, prependBaseUrlToHref, ...props } = item
  const toUrl = useBaseUrl(to)
  const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true })
  // const { onOpen } = useTestnetModal()
  return (
    <Link
      className="footer-link"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href
          }
        : {
            to: toUrl
          })}
      {...props}
      // onClick={() => {
      //   if (label === 'Trade' || label === 'Pools') {
      //     onOpen()
      //   }
      // }}
    >
      {label}
      {/* {href && !isInternalUrl(href) && <IconExternalLink />} */}
    </Link>
  )
}
