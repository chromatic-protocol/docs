import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Layout from '@theme/Layout'
import React from 'react'

import { Svgs } from '@site/static/img/icons/Svgs'

import { CHROMATIC_LINKS } from '../external-links'

function IconArrowButton({ label, icon, to = '', href = '', dark = false, ...props }) {
  const Svg = Svgs[icon]

  return (
    <Link
      className={`btn w-[225px] lg:w-[240px] !h-12 !px-4 
      ${dark ? 'btn-black-line' : 'btn-white-line'}`}
      to={to}
      href={href}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Svg fill="current" role="img" />
          {label}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="current"
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  )
}

function HomepageTop() {
  const { siteConfig } = useDocusaurusContext()
  const { chromaticHeader: Svg } = Svgs
  return (
    <>
      <section className="bg-white">
        <article className="h-[calc(100vh-90px)] text-center article">
          <div className="wrapper">
            <h1 className="text-[100px]">DERIVATIVE</h1>
            <p className="text-xl uppercase ">
              decentralized perpetual futures protocol built on top of Arbitrum
            </p>
          </div>
        </article>
      </section>

      <section className="text-white bg-black pb-[180px]">
        <article className="h-[100vh] text-center article">
          <div className="flex flex-col justify-between gap-28 wrapper">
            <div className="">
              <p className="text-[40px] uppercase mb-12">See the future on</p>
              <div className="max-w-[910px] mx-auto">
                <Svg fill="#fff" role="img" />
              </div>
            </div>
            <div>
              <p className="mb-20 text-xl uppercase text-white/30">
                first properly designed decentralized perpetual futures protocol introducing
                pioneering features of partitioned LP and dynamic fees for balanced maker-taker
                equilibrium.
              </p>
              <div className="flex justify-center gap-10">
                <IconArrowButton label="Start trade" href={CHROMATIC_LINKS.app} icon="chromatic" />
                <IconArrowButton label="Read Medium" href={CHROMATIC_LINKS.medium} icon="medium" />
                <IconArrowButton
                  label="Read Gitbook"
                  href={CHROMATIC_LINKS.gitbook}
                  icon="gitbook"
                />
              </div>
            </div>
          </div>
        </article>
        <article className="mt-20 article">
          <div className="wrapper">
            <h2 className="mb-[60px] title">Developement</h2>
            <div className="flex items-stretch gap-5">
              <div className="box h-[420px] border-[#333]">
                <div>
                  <h4 className="sub-title">Github</h4>
                  <p className="p">
                    One-size-fits-all doesn’t scale. In Chromatic protocol, users are in the drivers
                    seat. Chromatic protocol is a minimalist & permission-less protocol designed.
                  </p>
                </div>
                <div className="btns">
                  <IconArrowButton
                    label="View Github"
                    icon="github"
                    href={CHROMATIC_LINKS.github}
                  />
                </div>
              </div>
              <div className="box min-h-[420px] border-[#333]">
                <div>
                  <h4 className="sub-title">SDK</h4>
                  <p className="p">
                    One-size-fits-all doesn’t scale. In Chromatic protocol, users are in the drivers
                    seat. Chromatic protocol is a minimalist & permission-less protocol designed.
                  </p>
                </div>
                <div className="btns">
                  <IconArrowButton
                    label="View Contract"
                    icon="github"
                    href={CHROMATIC_LINKS.githubContracts}
                  />
                  <IconArrowButton
                    label="View SDK"
                    icon="github"
                    href={CHROMATIC_LINKS.githubSDK}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

function HomepageBottom() {
  return (
    <>
      <section className="bg-white pt-[220px] pb-[120px]">
        <article className="article">
          <div className="wrapper">
            <div className="box border-[#EEE]">
              <div>
                <h4 className="sub-title">ARTICLE</h4>
                <p className="p">
                  One-size-fits-all doesn’t scale. In Chromatic protocol, users are in the drivers
                  seat. Chromatic protocol is a minimalist & permission-less protocol designed.
                </p>
              </div>
              <div className="btns">
                <IconArrowButton
                  dark
                  label="View Gitbook"
                  icon="gitbook"
                  href={CHROMATIC_LINKS.gitbook}
                />
                <IconArrowButton
                  dark
                  label="Read Medium"
                  icon="medium"
                  href={CHROMATIC_LINKS.medium}
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="font-mono landing-page">
        <HomepageTop />
        <HomepageFeatures />
        <HomepageBottom />
      </main>
    </Layout>
  )
}
