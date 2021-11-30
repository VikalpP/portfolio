/* eslint-disable @next/next/no-img-element */
import React, { CSSProperties } from 'react'
import { Carousel, FadingOverlay, Spacer, Stack, THEME, useTheme } from '../../components'
import { Section } from '../section'

export function Skills() {
  const { theme } = useTheme()
  const imageClassName = 'h-100 object-fit-contain br5-l br4-m br3'
  return (
    <Section title='Skills' safeArea={false}>
      <Spacer size='none' ns='large' />
      <Spacer size='none' ns='normal' />
      <Stack fill className='relative overflow-hidden' padding='none x-large'>
        <Spacer size='none' ns='large' />

        <Carousel>
          <img className={imageClassName} src='/images/html.png' alt='HTML' />
          <img className={imageClassName} src='/images/react.png' alt='React' />
          <img className={imageClassName} src='/images/storybook.png' alt='StoryBook' />
          <img className={imageClassName} src='/images/sass.png' alt='SASS' />

          <img
            className={imageClassName}
            src={`/images/apollo${theme === THEME.LIGHT ? '-light' : ''}.png`}
            alt='Apollo GraphQL'
          />
          <img className={imageClassName} src='/images/razzel.png' alt='Razzel' />
        </Carousel>
        <Spacer size='x-large' l='large' />

        <Carousel>
          <img className={imageClassName} src='/images/css.png' alt='CSS' />
          <img
            className={imageClassName}
            src={`/images/webpack${theme === THEME.LIGHT ? '-light' : ''}.png`}
            alt='Webpack'
          />
          <img className={imageClassName} src='/images/graphql.png' alt='GraphQL' />
          <img className={imageClassName} src='/images/typegraphql.png' alt='TypeGraphQL' />
          <img className={imageClassName} src='/images/nodejs.png' alt='Node JS' />
          <img className={imageClassName} src='/images/ffmpeg.png' alt='FFmpeg' />
        </Carousel>
        <Spacer size='x-large' l='large' />

        <Carousel>
          <img className={imageClassName} src='/images/javascript.png' alt='JavaScript' />
          <img className={imageClassName} src='/images/typescript.png' alt='TypeScript' />
          <img className={imageClassName} src='/images/socket.png' alt='Socket.IO' />
          <img className={imageClassName} src='/images/babel.png' alt='Babel' />
          <img className={imageClassName} src='/images/github.png' alt='GitHub' />
          <img className={imageClassName} src='/images/expressjs.png' alt='Express JS' />
        </Carousel>
        <Spacer size='x-large' />

        <FadingOverlay side='left' className='absolute left-0 h-100 w5-ns w4' />
        <FadingOverlay side='right' className='absolute right-0 h-100 w5-ns w4' />
      </Stack>
      <Spacer size='none' ns='normal' />
    </Section>
  )
}
