import React from 'react'
import clsx from 'clsx'
export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'bg-black': style === 'dark'
      })}
    >
      <div className="flex flex-col lg:flex-row justify-between wrapper gap-10 lg:gap-[120px] container-fluid">
        {/* {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )} */}
        <div>
          <div className="footer-logo">
            {logo}
            <p className="mt-5 mb-0 text-xs text-white/50 lg:mt-7 whitespace-nowrap">
              A New Era in Decentralized Perpetual Futures
            </p>
          </div>
        </div>
        {links}
      </div>
    </footer>
  )
}
