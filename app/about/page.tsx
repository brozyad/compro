
import { FC } from 'react';
import Layout from '../components/Layout';
import { AboutUsPageHero } from '../components/About/AboutUsPageHero';
import { AboutUsTeamsHero } from '../components/About/AboutUsTeamsHero';

const About: FC = () => {
  return (
    <Layout>
      <AboutUsPageHero />
      <AboutUsTeamsHero />
    </Layout>
  );
};

export default About;
