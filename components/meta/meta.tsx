import Head from 'next/head'
import React, { memo } from 'react'

export const Meta = memo(() => {
  return (
    <Head>
      <title>{`Vikalp's Portfolio`}</title>
      <meta name='description' content="A Full Stack Developer - Vikalp's portfolio site." />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, viewport-fit=cover' />
      <link rel='icon' href='/favicon/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      <link rel='manifest' href='/favicon/site.webmanifest' />
    </Head>
  )
})

Meta.displayName = 'Meta'
