import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Stage } from '@pixi/react'
import { ChromaticText } from '@site/src/components/ChromaticText'

import { Svgs } from '@site/static/img/icons/Svgs'
import Layout from '@theme/Layout'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import { CHROMATIC_LINKS } from '../external-links'
import Features from '@site/src/components/Features'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import useGradient from '../hooks'

function Background({ color }: { color: string }) {
  const style = { backgroundColor: color, zIndex: -1, height: '100vh', width: '100vw' }
  return <div style={style} />
}

function IconArrowButton({ label, icon, to = '', href = '', dark = false, ...props }) {
  const Svg = Svgs[icon]

  return (
    <Link
      className={`btn w-[240px] md:w-[225px] lg:w-[240px] !h-12 !px-4 
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

const texts = ['DERIVATIVE', 'PERFETUAL', 'FUTURE', 'CHROMATIC']

function Intro() {
  return (
    <section>
      <article className="h-[calc(100vh-90px)] text-center article">
        <div className="wrapper">
          {/* <h1 className="text-[100px]">DERIVATIVE</h1> */}
          {/* todo: mobile view */}
          <div className="flex items-center w-full overflow-hidden ">
            <Stage
              width={1200}
              height={200}
              className="flex-auto h-auto max-w-full"
              options={{
                autoDensity: true,
                backgroundColor: 0xffffff,
                backgroundAlpha: 0
              }}
            >
              <ChromaticText texts={texts} y={0} width={1200} height={200} />
            </Stage>
          </div>

          <p className="text-xl uppercase ">
            decentralized perpetual futures protocol built on top of Arbitrum
          </p>
        </div>
      </article>
    </section>
  )
}

function StartingGuide() {
  const { chromaticHeader: Svg } = Svgs
  return (
    <section className="text-white pb-[180px]">
      <article className="h-[100vh] text-center article">
        <div className="flex flex-col justify-between gap-12 md:gap-28 wrapper">
          <div className="">
            <p className="text-lg md:text-[40px] uppercase mb-8 md:mb-12">See the future on</p>
            <div className="max-w-[910px] mx-auto px-4">
              <Svg fill="#fff" role="img" alt="CHROMATIC" />
            </div>
          </div>
          <div>
            <p className="mb-20 text-lg text-white/30">
              First properly designed decentralized perpetual futures protocol introducing
              pioneering features of partitioned LP and dynamic fees for balanced maker-taker
              equilibrium.
            </p>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10">
              <IconArrowButton label="Start trade" href={CHROMATIC_LINKS.app} icon="chromatic" />
              <IconArrowButton label="Read Medium" href={CHROMATIC_LINKS.medium} icon="medium" />
              <IconArrowButton label="Read Gitbook" href={CHROMATIC_LINKS.gitbook} icon="gitbook" />
            </div>
          </div>
        </div>
      </article>
      <article className="mt-20 article">
        <div className="wrapper">
          <h2 className="mb-[60px] title">Developement</h2>
          <div className="flex flex-wrap items-stretch gap-5 lg:flex-nowrap">
            <div className="box lg:min-h-[420px] border-[#333]">
              <div>
                <h4 className="sub-title">Github</h4>
                <p className="p">
                  One-size-fits-all doesn’t scale. In Chromatic protocol, users are in the drivers
                  seat. Chromatic protocol is a minimalist & permission-less protocol designed.
                </p>
              </div>
              <div className="btns">
                <IconArrowButton label="View Github" icon="github" href={CHROMATIC_LINKS.github} />
              </div>
            </div>
            <div className="box lg:min-h-[420px] border-[#333]">
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
                <IconArrowButton label="View SDK" icon="github" href={CHROMATIC_LINKS.githubSDK} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

function FeatureList(): JSX.Element {
  return (
    <section className="pt-[160px]">
      <article className="article">
        <Features />
      </article>
    </section>
  )
}

function Article() {
  return (
    <>
      <section className="pt-[220px] pb-[120px]">
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

  const ref = useRef(null)

  const PAGES = 11

  const { main, sub } = useGradient({
    ref,
    color: { main: '#ffffff', sub: '#000000' },
    map: [{ start: 1.5, end: 5 }],
    offset: 0.5
  })

  // const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="font-mono landing-page bg-grey">
        <Parallax pages={PAGES} ref={ref}>
          <ParallaxLayer offset={0}>
            <Intro />
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <StartingGuide />
          </ParallaxLayer>
          <ParallaxLayer offset={5}>
            <FeatureList />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 10, end: 11 }}>
            <Article />
          </ParallaxLayer>
          <ParallaxLayer sticky={{ start: 0, end: 11 }}>
            <Background color={main} />
          </ParallaxLayer>
        </Parallax>
      </main>
    </Layout>
  )
}
