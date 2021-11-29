import type { NextPage } from 'next'
import { Screen } from '../components'
import { AboutMe, Intro, Nav } from '../views'

const Home: NextPage = () => {
  return (
    <Screen>
      <Nav />
      <Intro />
      <AboutMe />
    </Screen>
  )
}

export default Home
