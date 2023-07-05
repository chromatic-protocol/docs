import { useColorMode } from '@docusaurus/theme-common'
import React from 'react'
import styles from './styles.module.css'
import TypingEffect from '../TypingEffect'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Seperation of index and settlement tokens',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        By separating the underlying index and settlement token, Chromatic Protocol enables the
        creation of diverse futures markets. Market creators can combine non- manipulable time
        series from external. By separating the underlying index and settlement token, Chromatic
        Protocol enables the creation of diverse futures markets. Market creators can combine non-
        manipulable time series from external.
      </>
    )
  },
  {
    title: 'Pre-set Tailored Payoff by Smart Contracts',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        Addressing the challenge of trustless payoffs in DeFi, Chromatic Protocol offers contracts
        for secure and automated execution of payoffs instead of relying on intermediaries.
        Addressing the challenge of trustless payoffs in DeFi, Chromatic Protocol offers contracts
        for secure and automated execution of payoffs instead of relying on intermediaries.
      </>
    )
  },
  {
    title: 'Seperation of index and settlement tokens',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        One-size-fits-all doesn’t scale. In Chromatic protocol, users are in the drivers seat.
        Chromatic protocol is a minimalist & permission-less protocol designed. One-size-fits-all
        doesn’t scale. In Chromatic protocol, users are in the drivers seat. Chromatic protocol is a
        minimalist & permission-less protocol designed.
      </>
    )
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
    <div
      className={`flex lg:justify-between lg:items-center gap-24 flex-col-reverse lg:flex-row px-4 lg:px-0 ${styles.feature}`}
    >
      <div className="">
        <Svg
          className="w-full max-w-[400px]"
          fill={isDarkMode ? '#ffffff' : '#000000'}
          role="img"
          filter={isDarkMode && 'invert(1)'}
        />
      </div>
      <div className="text-left">
        <h4 className="sub-title lg:hidden max-w-[560px]">{title}</h4>
        <div className="h-[100px] hidden lg:block lg:w-[560px]">
          <TypingEffect text={title} delay={38} className="sub-title" />
        </div>
        <p className="mt-10 mb-2 text-lg max-w-[580px]">{description}</p>
      </div>
    </div>
  )
}

export default function Features(): JSX.Element {
  return (
    <section className="pt-[160px]">
      <article className="article">
        <div className="wrapper">
          <h2 className="title mb-[120px]">about chromatic</h2>
          <div className="flex flex-col gap-[220px]">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}
