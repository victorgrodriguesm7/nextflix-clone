import type { GetStaticPropsResult, GetStaticProps, NextPage } from 'next'
import type { Topic } from '../services/api_interfaces';

import Api from '../services/api';

import styles from '../styles/pages/Home.module.css';
import Header from '../components/Header';
interface HomeProps {
  topics: Array<Topic>;
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { topics } = props;

  return (
    <div className={styles.container}>
      <Header/>
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