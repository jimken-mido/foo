import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: '',
    description: <></>,
    links: [
    ],
  },

];

function Feature({ imageUrl, title, description, links }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={clsx('no-auto-height', styles.featureImage)} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {FeatureItems(links)}
    </div>
  );
}

function FeatureItems(links) {
  return (
    <ul class="feature-list">
      {links.map(({ url, title, items }) => (
        <li>
          <Link to={useBaseUrl(url)}>{title}</Link>
          {items?.length && FeatureItems(items)}
        </li>
      ))}
    </ul>
  );
}
<a name="top"></a>
function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="High-end GPU servers for HPC and AI workloads delivered to your doorstep."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <img
            className={clsx('no-auto-height', styles.heroImage)}
            src={useBaseUrl('img/foo.svg')}
            alt="foo svg"
          />
          <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            One thing
          </Link>
           </div>
           <p></p>
          <div className={styles.buttons}>
            <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Another thing
          </Link>
          </div>
          <p></p>
          <div className={styles.buttons}>
            <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Third thing
          </Link>
          </div>
        </div>
      </header>
      
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h2 className="text--center"><Translate>Lorem Ipsum Dolor</Translate></h2>
              <p>
                <Translate>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Translate>
              </p>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <a href="#top">&#8593;</a>
    </Layout>
  );
}

export default Home;