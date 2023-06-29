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
      className={`btn w-[225px] lg:w-[240px] !h-12 !px-4 
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
  return (
    <>
      <section className="bg-white">
        <article className="h-[100vh] text-center article">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  fill="none"
                  viewBox="0 0 530 47"
                >
                  <path
                    fill="#fff"
                    d="M49.525 40.834c-.211.102-.445.226-.693.35-1.334.7-3.034 1.486-5.083 2.36-2.049.875-4.383 1.633-7 2.274-2.619.641-5.354.962-8.205.962-3.749 0-7.344-.467-10.793-1.4-3.45-.932-6.498-2.375-9.146-4.328a21.436 21.436 0 0 1-6.286-7.3C.773 30.836 0 27.426 0 23.52c0-3.906.773-7.243 2.32-10.187a21.73 21.73 0 0 1 6.285-7.388c2.648-1.982 5.696-3.469 9.146-4.46C21.2.496 24.795 0 28.544 0c3.034 0 5.783.233 8.248.7 2.465.466 4.624.961 6.469 1.486 1.845.525 3.303 1.02 4.368 1.486.16.073.306.132.452.19l-4.995 7.782a7.563 7.563 0 0 0-.715-.503c-1.072-.67-2.392-1.268-3.967-1.792a41.293 41.293 0 0 0-4.996-1.312c-1.757-.35-3.376-.525-4.864-.525-2.494 0-4.894.35-7.184 1.05-2.29.7-4.28 1.72-5.972 3.06a15.002 15.002 0 0 0-4.055 4.94c-1.014 1.953-1.517 4.183-1.517 6.69 0 2.506.503 4.736 1.517 6.689a15.092 15.092 0 0 0 4.055 4.94c1.692 1.34 3.683 2.36 5.972 3.06 2.29.7 4.682 1.05 7.184 1.05 1.903 0 3.894-.22 5.973-.656 2.078-.438 3.981-.991 5.71-1.662 1.72-.67 3.165-1.428 4.324-2.273.22-.16.416-.313.591-.474l4.383 6.893v.015ZM104.512.524h10.167v45.993h-10.167V26.931H75.793v19.586H65.627V.524h10.166v18.013h28.719V.524Zm58.219 0c2.851 0 5.44.248 7.759.744 2.319.495 4.31 1.282 5.973 2.36 1.663 1.079 2.946 2.478 3.836 4.198.89 1.72 1.334 3.832 1.334 6.339 0 3.847-1.159 6.79-3.478 8.831-2.319 2.04-5.441 3.41-9.364 4.11l11.865 16.613 1.998 2.798H171.19s-3.172-4.43-3.646-5.071l-9.809-13.64H144.98v18.711h-10.166V.524h27.917Zm-2.319 20.461c2.144 0 3.923-.16 5.352-.48 1.43-.322 2.553-.773 3.392-1.356.831-.583 1.429-1.268 1.786-2.055.358-.787.533-1.647.533-2.58a6.28 6.28 0 0 0-.533-2.579c-.35-.787-.948-1.472-1.786-2.055-.832-.583-1.962-1.034-3.392-1.355-1.429-.32-3.208-.48-5.352-.48H144.98v12.94h15.432ZM224.435 0c3.267 0 6.6.48 9.991 1.443 3.391.962 6.483 2.404 9.276 4.328 2.793 1.924 5.083 4.357 6.87 7.301s2.676 6.427 2.676 10.449-.889 7.505-2.676 10.449c-1.787 2.944-4.077 5.377-6.87 7.301-2.793 1.924-5.885 3.323-9.276 4.197-3.391.874-6.717 1.312-9.991 1.312-3.275 0-6.6-.438-9.991-1.312-3.391-.874-6.484-2.273-9.277-4.197-2.793-1.924-5.083-4.357-6.869-7.301-1.787-2.944-2.677-6.427-2.677-10.449s.89-7.505 2.677-10.449c1.786-2.944 4.069-5.377 6.869-7.301 2.793-1.924 5.886-3.366 9.277-4.328C217.835.48 221.16 0 224.435 0Zm0 8.044c-2.261 0-4.522.35-6.775 1.05-2.261.7-4.296 1.705-6.112 3.016a15.695 15.695 0 0 0-4.412 4.853c-1.13 1.924-1.692 4.11-1.692 6.558 0 2.448.562 4.634 1.692 6.558a15.882 15.882 0 0 0 4.412 4.853c1.816 1.311 3.851 2.317 6.112 3.016 2.261.7 4.521 1.05 6.775 1.05 2.253 0 4.521-.35 6.775-1.05 2.26-.7 4.295-1.705 6.111-3.016a15.77 15.77 0 0 0 4.412-4.853c1.131-1.924 1.692-4.11 1.692-6.558 0-2.448-.569-4.634-1.692-6.558a15.856 15.856 0 0 0-4.412-4.853c-1.816-1.311-3.851-2.317-6.111-3.016-2.261-.7-4.522-1.05-6.775-1.05ZM336.729 41.62l16.503-34.013c.416-.758 3.435-7.083 3.435-7.083h7.242s3.004 5.8 3.42 6.558l18.553 35.588c.299.641 2.005 3.847 2.005 3.847h-11.486s-2.086-3.964-2.567-4.896l-3.391-6.47h-21.762l-3.208 6.207c-.598 1.224-2.67 5.16-2.67 5.16h-8.445s1.962-4.081 2.378-4.897h-.007Zm30.505-12.94-7.49-16.264-8.386 16.264h15.876Zm55.067 17.837h-10.166V8.57h-18.64V.524h47.454V8.57h-18.64v37.948h-.008Zm32.176 0V.524h10.166v45.993h-10.166Zm74.569-5.683c-.212.102-.445.226-.693.35-1.335.7-3.034 1.486-5.083 2.36-2.05.875-4.383 1.633-7.001 2.274-2.618.641-5.353.962-8.205.962-3.748 0-7.343-.467-10.793-1.4-3.449-.932-6.498-2.375-9.145-4.328a21.438 21.438 0 0 1-6.286-7.3c-1.546-2.915-2.319-6.325-2.319-10.231 0-3.906.773-7.243 2.319-10.187a21.732 21.732 0 0 1 6.286-7.388c2.647-1.982 5.696-3.469 9.145-4.46C500.721.496 504.316 0 508.064 0c3.034 0 5.783.233 8.248.7 2.465.466 4.624.961 6.469 1.486 1.845.525 3.304 1.02 4.368 1.486.161.073.307.132.453.19l-4.996 7.782a7.48 7.48 0 0 0-.715-.503c-1.072-.67-2.392-1.268-3.967-1.792a41.304 41.304 0 0 0-4.995-1.312c-1.758-.35-3.377-.525-4.865-.525-2.494 0-4.893.35-7.183 1.05-2.29.7-4.281 1.72-5.973 3.06a15.009 15.009 0 0 0-4.055 4.94c-1.013 1.953-1.516 4.183-1.516 6.69 0 2.506.503 4.736 1.516 6.689a15.095 15.095 0 0 0 4.055 4.94c1.692 1.34 3.683 2.36 5.973 3.06 2.29.7 4.682 1.05 7.183 1.05 1.904 0 3.895-.22 5.973-.656 2.079-.438 3.982-.991 5.71-1.662 1.721-.67 3.165-1.428 4.325-2.273.219-.16.416-.313.591-.474l4.383 6.893v.015Zm-261.497 5.683V.524h11.683l15.702 27.98L310.927.525h11.661v45.993h-9.809V14.34h-.182l-17.926 32.177h-.27l-17.568-32.265h-.182v32.265h-9.102Z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-20 text-xl uppercase text-white/30">
                first properly designed decentralized perpetual futures protocol introducing
                pioneering features of partitioned LP and dynamic fees for balanced maker-taker
                equilibrium.
              </p>
              <div className="flex justify-center gap-10">
                <IconArrowButton label="Start trade" icon="chromatic" to="" />
                <IconArrowButton label="Read Medium" to="" icon="medium" />
                <IconArrowButton label="Read Gitbook" to="" icon="gitbook" />
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
                  <IconArrowButton label="View Github" icon="github" to="" />
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
                  <IconArrowButton label="View Contract" icon="github" to="" />
                  <IconArrowButton label="View SDK" icon="github" to="" />
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
                <IconArrowButton dark label="View Gitbook" icon="gitbook" to="" />
                <IconArrowButton dark label="Read Medium" icon="medium" to="" />
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
