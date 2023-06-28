import React from 'react'
import clsx from 'clsx'
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'bg-black': style === 'dark'
      })}
    >
      <div className="container relative container-fluid">
        {/* {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )} */}
        {logo && <div className="absolute top-0 left-0 footer-logo">{logo}</div>}
        {links}
      </div>
    </footer>
  )
}
