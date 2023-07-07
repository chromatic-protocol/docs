import React from 'react'
import Link from '@docusaurus/Link'
import { Svgs } from '@site/static/img/icons/Svgs'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Stage } from '@pixi/react'
import { ChromaticText } from '@site/src/components/ChromaticText'
import Modal from '../components/Modal'

import Layout from '@theme/Layout'

import Features from '@site/src/components/Features'
import Trigger from '@site/src/components/Trigger'

import { useScrollPosition } from '@site/src/hooks/useScroll'
import { useColorMode } from '@docusaurus/theme-common'

import { CHROMATIC_LINKS } from '@site/src/external-links'
import { useTestnetModal } from '../hooks/useTestnetModal'

function IconArrowButton({
  label,
  icon,
  to = '',
  href = '',
  dark = false,
  onClick = null,
  ...props
}) {
  const Svg = Svgs[icon]

  return (
    <Link
      className={`btn w-[240px] md:w-[240px] lg:w-[200px] !h-12 !px-4 cursor-pointer 
      ${dark ? 'btn-black-line' : 'btn-white-line'}`}
      to={to}
      href={href}
      onClick={onClick}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3 text-lg">
          <Svg fill="current" role="img" className="w-5 h-5" />
          {label}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
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

          <p className="text-xl uppercase ">A NEW ERA IN DECENTRALIZED PERPETUAL FUTURES</p>
        </div>
      </article>
    </section>
  )
}

function StartingGuide() {
  const { chromaticHeader: Svg } = Svgs
  const { colorMode } = useColorMode()
  const { onOpen } = useTestnetModal()

  return (
    <section className="pb-[180px]">
      <article className="h-[100vh] text-center article">
        <div className="flex flex-col justify-between gap-12 md:gap-14 wrapper">
          <div className="">
            <p className="mb-8 text-2xl uppercase lg:text-4xl md:mb-12">See the future on</p>
            <div className="max-w-[910px] mx-auto px-4">
              <Svg fill={colorMode === 'dark' ? '#FFFFFF' : '#000000'} role="img" />
            </div>
          </div>
          <div>
            <p className="mb-20 text-xl leading-normal md:max-w-[80%] opacity-50 mx-auto">
              The first properly designed decentralized perpetual futures protocol that provides
              permissionless, trustless, and unopinionated building blocks. It enables participants
              in the DeFi ecosystem to create balanced two-sided markets exposed to oracle price
              feeds and trade futures using various strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-5 md:gap-10">
              <IconArrowButton
                label="Testnet App"
                href={null}
                onClick={onOpen}
                // href={CHROMATIC_LINKS.app}
                icon="chromatic"
              />
              <IconArrowButton label="Read Medium" href={CHROMATIC_LINKS.medium} icon="medium" />
              <IconArrowButton label="Read Gitbook" href={CHROMATIC_LINKS.gitbook} icon="gitbook" />
            </div>
          </div>
        </div>
      </article>
      <article className="mt-20 article">
        <div className="wrapper">
          <h2 className="mb-10 title">Developement</h2>
          <div className="flex flex-wrap items-stretch gap-5 lg:flex-nowrap">
            <div className="box flex-1 lg:min-h-[420px] border-[#333]">
              <div>
                <h4 className="sub-title">Github</h4>
                <p className="p">
                  Start building with Chromatic Protocol. With its unopinionated, low-level, and
                  non-upgradable design, Chromatic empowers developers to build decentralized
                  perpetual futures platforms that align with their unique business and trading
                  strategies.
                </p>
              </div>
              <div className="btns">
                <IconArrowButton label="View Github" icon="github" href={CHROMATIC_LINKS.github} />
              </div>
            </div>
            <div className="box flex-1 lg:min-h-[420px] border-[#333]">
              <div>
                <h4 className="sub-title">SDK</h4>
                <p className="p">
                  Discover the Chromatic Protocol SDK, a comprehensive JavaScript library designed
                  to facilitate seamless interaction with Chromatic Protocol on Arbitrum. This
                  document serves as a step-by-step guide, assisting you in the setup process for
                  utilizing the SDK effectively.
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
                <h4 className="sub-title">ARTICLES</h4>
                <p className="p">
                  Stay informed and up to date with more detailed information, insights and updates
                  from Chromatic Protocol.
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

function Contents() {
  const triggerProps = useScrollPosition()
  const { isOpen, onClose } = useTestnetModal()
  const { colorMode, setColorMode } = useColorMode()

  function setMode(type: typeof colorMode) {
    return () => {
      setColorMode(type)
    }
  }

  return (
    <main className="font-mono landing-page">
      <Intro />
      <Trigger
        onUp={setMode('light')}
        onDown={setMode('dark')}
        offset={'-20vh'}
        {...triggerProps}
      />
      <StartingGuide />
      <Trigger
        onUp={setMode('dark')}
        onDown={setMode('light')}
        offset={'-25vh'}
        {...triggerProps}
      />
      <Features />
      <Article />
      {isOpen && (
        <Modal
          isOpen={true}
          onClose={onClose}
          title="Testnet Launch"
          message="Arbitrum Goerli testnet app will be activated shortly!"
        />
      )}
    </main>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Contents />
    </Layout>
  )
}
