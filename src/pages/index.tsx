import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React from 'react'

import { Svgs } from '@site/static/img/icons/Svgs'

import styles from './index.module.css'

function IconArrowButton({ label, icon, to = '', href = '', dark = false, ...props }) {
  const Svg = Svgs[icon]

  return (
    <Link
      className={`btn w-[240px] !h-12 !px-4 
      ${dark ? 'btn-black-line' : 'btn-white-line'}`}
      to={to}
      href={href}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Svg fill="current" role="img" src={icon} />
          {label}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="current"
            fill-rule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </Link>
  )
}

  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title bg-black">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
