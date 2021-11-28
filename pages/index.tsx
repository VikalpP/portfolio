import type { NextPage } from 'next';
import { Screen } from '../components';
import { Nav } from '../views';

const Home: NextPage = () => {
  return (
    <Screen>
      <Nav />
    </Screen>
  );
};

export default Home;
