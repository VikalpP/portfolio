import Head from 'next/head'
import React, { memo } from 'react'

export const Meta = memo(() => {
  return (
    <Head>
      <title>{`Vikalp's Portfolio`}</title>
      <meta name='description' content="A Full Stack Developer - Vikalp's portfolio site." />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
})

Meta.displayName = 'Meta'
