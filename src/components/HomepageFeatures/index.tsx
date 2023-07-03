import { useColorMode } from '@docusaurus/theme-common'
import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.css'

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
        series from external.
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
      </>
    )
  },
  {
    title: 'Seperation of index and settlement tokens',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        One-size-fits-all doesn’t scale. In Chromatic protocol, users are in the drivers seat.
        Chromatic protocol is a minimalist & permission-less protocol designed.
      </>
    )
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  const { isDarkTheme } = useColorMode()
  return (
    <div className={`flex justify-between items-end gap-24 ${styles.feature}`}>
      <div className="">
        <Svg className="w-auto" fill={isDarkTheme ? '#ffffff' : '#000000'} role="img" />
      </div>
      <div className="max-w-[650px]">
        <h4 className="mb-16 sub-title">{title}</h4>
        <p className="mb-2 text-lg text-black/40 max-w-[550px]">{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className="bg-white pt-[160px]">
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
    </>
  )
}
