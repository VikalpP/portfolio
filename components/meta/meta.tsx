import Head from 'next/head'
import React, { memo } from 'react'

const title = `Vikalp's Portfolio`
const description = 'A Full Stack Developer'
const twitterCardStyle = 'summary_large_image'
const siteName = 'vikalppanseriya.com'
const siteUrl = 'https://www.vikalppanseriya.com'
const shareUnitImageUrl = `${siteUrl}/share-unit.png`

export const Meta = memo(() => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
      <link rel='icon' href='/favicon/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      <link rel='manifest' href='/favicon/site.webmanifest' />

      <meta name='description' content={description} />
      <meta name='title' content={title} />
      <meta name='twitter:card' content={twitterCardStyle} />
      <meta name='twitter:image:src' content={shareUnitImageUrl} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:image' content={shareUnitImageUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={siteUrl} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:card' content={twitterCardStyle} />
      <meta property='twitter:image' content={shareUnitImageUrl} />
    </Head>
  )
})

Meta.displayName = 'Meta'
