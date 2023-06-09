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
    title: 'Wide Expandability by Seperated Settlement and Target Assets',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        No price slippage, no MEV and low tx fees. The first derivatives platform that makes
        composability both easy & profitable
      </>
    )
  },
  {
    title: 'Stability and Efficiency by Tailored Margin Mechanism',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        Straightforward exposure & deep liquidity for Traders (takers). High capital efficiency &
        isolated pools for Makers.
      </>
    )
  },
  {
    title: 'Strategic Market Making by Segmented Liquidity Pool Slots',
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
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} fill={isDarkTheme ? '#ffffff' : '#000000'} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
