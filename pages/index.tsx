import type { NextPage } from 'next'
import { Screen } from '../components'
import { AboutMe, Experience, Intro, Nav } from '../views'

const Home: NextPage = () => {
  return (
    <Screen>
      <Nav />
      <Intro />
      <AboutMe />
      <Experience />
    </Screen>
  )
}

export default Home
