import type { NextPage } from 'next'
import { Screen } from '../components'
import { AboutMe, Contact, Experience, Intro, Nav, Skills } from '../views'

const Home: NextPage = () => {
  return (
    <Screen>
      <Nav />
      <Intro />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </Screen>
  )
}

export default Home
