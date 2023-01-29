import { Carousel, FadingOverlay, Spacer, Stack, THEME, useTheme } from '../../components'
import apolloLightImage from '../../public/images/apollo-light.webp'
import apolloImage from '../../public/images/apollo.webp'
import babelImage from '../../public/images/babel.webp'
import cssImage from '../../public/images/css.webp'
import expressJsImage from '../../public/images/expressjs.webp'
import ffmpegImage from '../../public/images/ffmpeg.webp'
import githubImage from '../../public/images/github.webp'
import graphqlImage from '../../public/images/graphql.webp'
import htmlImage from '../../public/images/html.webp'
import javascriptImage from '../../public/images/javascript.webp'
import nodeJsImage from '../../public/images/nodejs.webp'
import razzelImage from '../../public/images/razzel.webp'
import reactImage from '../../public/images/react.webp'
import sassImage from '../../public/images/sass.webp'
import socketImage from '../../public/images/socket.webp'
import storybookImage from '../../public/images/storybook.webp'
import typeGraphqlImage from '../../public/images/typegraphql.webp'
import typescriptImage from '../../public/images/typescript.webp'
import webpackLightImage from '../../public/images/webpack-light.webp'
import webpackImage from '../../public/images/webpack.webp'
import { Section } from '../section'
import { SkillImage } from './skill-image'

export function Skills() {
  const { theme } = useTheme()
  const lightTheme = theme === THEME.LIGHT

  const skills1 = [
    { image: htmlImage, alt: 'HTML' },
    { image: reactImage, alt: 'React' },
    { image: storybookImage, alt: 'StoryBook' },
    { image: sassImage, alt: 'SASS' },
    { image: lightTheme ? apolloLightImage : apolloImage, alt: 'Apollo' },
    { image: razzelImage, alt: 'Razzel' },
  ]
  const skills2 = [
    { image: cssImage, alt: 'CSS' },
    { image: lightTheme ? webpackLightImage : webpackImage, alt: 'Webpack' },
    { image: graphqlImage, alt: 'GraphQL' },
    { image: typeGraphqlImage, alt: 'TypeGraphQL' },
    { image: nodeJsImage, alt: 'Node JS' },
    { image: ffmpegImage, alt: 'FFmpeg' },
  ]
  const skills3 = [
    { image: javascriptImage, alt: 'JavaScript' },
    { image: typescriptImage, alt: 'TypeScript' },
    { image: socketImage, alt: 'Socket.IO' },
    { image: babelImage, alt: 'Babel' },
    { image: githubImage, alt: 'GitHub' },
    { image: expressJsImage, alt: 'Express JS' },
  ]

  return (
    <Section title='Skills' safeArea={false}>
      <Spacer size='none' ns='large' />
      <Spacer size='none' ns='normal' />
      <Stack fill className='relative overflow-hidden' padding='none x-large'>
        <Spacer size='none' ns='large' />

        <Carousel>
          {skills1.map(skill => (
            <SkillImage key={skill.image.src} image={skill.image} alt={skill.alt} />
          ))}
        </Carousel>
        <Spacer size='x-large' />

        <Carousel>
          {skills2.map(skill => (
            <SkillImage key={skill.image.src} image={skill.image} alt={skill.alt} />
          ))}
        </Carousel>
        <Spacer size='x-large' />

        <Carousel>
          {skills3.map(skill => (
            <SkillImage key={skill.image.src} image={skill.image} alt={skill.alt} />
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
