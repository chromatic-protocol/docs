import React from 'react'
import styles from './styles.module.css'
import TypingEffect from '../TypingEffect'
import { useColor } from '@site/src/theme/Contexts/color'

type FeatureItem = {
  title: string
  titleWidth: number
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'SEPARATION OF INDEX AND SETTLEMENT TOKEN',
    titleWidth: 560,
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        A diverse array of futures markets can be established in a permissionless manner by
        utilizing oracle price feeds as the index and leveraging ERC-20 tokens as a settlement
        token. Chromatic Protocol is the most versatile among existing decentralized futures
        protocols, offering the ability to generate a wide range of futures markets.
      </>
    )
  },
  {
    title: 'PREDEFINED TP/SL ON SMART CONTRACT',
    titleWidth: 460,
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        To ensure trustless payoffs in the DeFi environment, Chromatic Protocol implemented smart
        contracts for secure and automated execution of payoffs instead of relying on
        intermediaries. It mitigates the delta risk in highly volatile markets for makers, liberates
        takers from forced liquidations, and enhances the capital efficiency of the protocol.
      </>
    )
  },
  {
    title: 'PARTITIONED LP WITH DYNAMIC FEES',
    titleWidth: 460,
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        Chromatic’s LPs are divided into multiple bins with different trading fees, and the optimal
        fee is determined based on taker’s trading demand and maker’s liquidity supply. This dynamic
        fee system achieves a balanced maker-taker equilibrium, addressing the inherent instability
        of closed systems like futures markets and significantly enhancing the sustainability of the
        protocol.
      </>
    )
  }
]

function Feature({ title, titleWidth, Svg, description }: FeatureItem) {
  const { color } = useColor()
  const isDark = color === 'dark'
  return (
    <div
      className={`flex lg:justify-between lg:items-center gap-24 flex-col-reverse lg:flex-row px-4 lg:px-0 ${styles.feature}`}
    >
      <div className="hidden lg:inline-block">
        <Svg
          className="w-full max-w-[400px]"
          fill={isDark ? '#ffffff' : '#000000'}
          role="img"
          filter={isDark ? 'invert(1)' : undefined}
        />
      </div>
      <div className="text-left">
        <h4 className="sub-title primary lg:hidden" style={{ maxWidth: `${titleWidth}px` }}>
          {title}
        </h4>
        <div
          className="h-[100px] hidden lg:block lg:w-[560px]"
          style={{ maxWidth: `${titleWidth}px` }}
        >
          <TypingEffect text={title} delay={38} className="sub-title primary" />
        </div>
        <div className="mt-10 lg:hidden">
          <Svg
            className="w-full max-w-[400px]"
            fill={isDark ? '#ffffff' : '#000000'}
            role="img"
            filter={isDark && 'invert(1)'}
          />
        </div>
        <p className="mt-5 lg:mt-10 mb-2 text-xl max-w-[580px] primary-lighter font-sans">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Features(): JSX.Element {
  return (
    <section className="pt-[160px]">
      <article className="article">
        <div className="wrapper">
          <h2 className="title mb-[120px] primary-lighter">about chromatic</h2>
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
