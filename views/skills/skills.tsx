import React from 'react'
import { Carousel, FadingOverlay, Spacer, Stack, THEME, useTheme } from '../../components'
import { Section } from '../section'
import { SkillImage } from './skill-image'

export function Skills() {
  const { theme } = useTheme()

  const skills1 = [
    { src: '/images/html.png', alt: 'HTML', width: 640, height: 640 },
    { src: '/images/react.png', alt: 'React', width: 244, height: 244 },
    { src: '/images/storybook.png', alt: 'StoryBook', width: 2082, height: 495 },
    { src: '/images/sass.png', alt: 'SASS', width: 664, height: 408 },
    {
      src: theme === THEME.LIGHT ? '/images/apollo-light.png' : '/images/apollo.png',
      alt: 'HTML',
      width: 1024,
      height: 351,
    },
    { src: '/images/razzel.png', alt: 'Razzel', width: 646, height: 180 },
  ]
  const skills2 = [
    { src: '/images/css.png', alt: 'CSS', width: 640, height: 640 },
    {
      src: theme === THEME.LIGHT ? '/images/webpack-light.png' : '/images/webpack.png',
      alt: 'Webpack',
      width: 3916,
      height: 1524,
    },
    { src: '/images/graphql.png', alt: 'GraphQL', width: 652, height: 248 },
    { src: '/images/typegraphql.png', alt: 'TypeGraphQL', width: 1058, height: 772 },
    { src: '/images/nodejs.png', alt: 'Node JS', width: 668, height: 408 },
    { src: '/images/ffmpeg.png', alt: 'FFmpeg', width: 876, height: 280 },
  ]
  const skills3 = [
    { src: '/images/javascript.png', alt: 'JavaScript', width: 504, height: 504 },
    { src: '/images/typescript.png', alt: 'TypeScript', width: 432, height: 432 },
    { src: '/images/socket.png', alt: 'Socket.IO', width: 530, height: 194 },
    { src: '/images/babel.png', alt: 'Babel', width: 904, height: 432 },
    { src: '/images/github.png', alt: 'GitHub', width: 288, height: 288 },
    { src: '/images/expressjs.png', alt: 'Express JS', width: 535, height: 216 },
  ]

  return (
    <Section title='Skills' safeArea={false}>
      <Spacer size='none' ns='large' />
      <Spacer size='none' ns='normal' />
      <Stack fill className='relative overflow-hidden' padding='none x-large'>
        <Spacer size='none' ns='large' />

        <Carousel>
          {skills1.map(skill => (
            <SkillImage key={skill.src} skill={skill} />
          ))}
        </Carousel>
        <Spacer size='x-large' l='large' />

        <Carousel>
          {skills2.map(skill => (
            <SkillImage key={skill.src} skill={skill} />
          ))}
        </Carousel>
        <Spacer size='x-large' l='large' />

        <Carousel>
          {skills3.map(skill => (
            <SkillImage key={skill.src} skill={skill} />
          ))}
        </Carousel>
        <Spacer size='x-large' />

        <FadingOverlay side='left' className='absolute left-0 h-100 w5-ns w4' />
        <FadingOverlay side='right' className='absolute right-0 h-100 w5-ns w4' />
      </Stack>
      <Spacer size='none' ns='normal' />
    </Section>
  )
}
