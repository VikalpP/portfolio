import type { NextPage } from 'next'
import { Screen } from '../components'
import { Intro, Nav } from '../views'

const Home: NextPage = () => {
  return (
    <Screen>
      <Nav />
      <Intro />
    </Screen>
  )
}

export default Home
