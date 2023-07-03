import React from 'react'
import clsx from 'clsx'
export default function FooterLayout({ style, links, logo, copyright }) {
  // FIXME: REMOVE THIS
  return null
  return (
    <footer
      className={clsx('footer', {
        'bg-black': style === 'dark'
      })}
    >
      <div className="flex flex-col lg:flex-row justify-between wrapper gap-10 lg:gap-[200px] container-fluid">
        {/* {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )} */}
        {logo && <div className="footer-logo">{logo}</div>}
        {links}
      </div>
    </footer>
  )
}
