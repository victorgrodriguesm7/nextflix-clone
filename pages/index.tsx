import type { GetStaticPropsResult, GetStaticProps, NextPage } from 'next'
import type { Topic } from '../services/api_interfaces';

import Api from '../services/api';
interface HomeProps {
  topics: Array<Topic>;
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { topics } = props;
  return (
    <div>
      Hello World
    </div>
  )
}

export default Home

export async function getStaticProps(context: GetStaticProps): Promise<GetStaticPropsResult<HomeProps>>{
  const topics: Array<Topic> = await Api.getHomeList();

  return {
    props: {
      topics: topics
    }
  }
}