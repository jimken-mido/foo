import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Basics',
    description: <>Familiarize with ConfigCat basics.</>,
    links: [
      { url: 'getting-started', title: 'Getting started' },
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

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for ConfigCat Feature Flags. ConfigCat is a developer-centric feature flag service with unlimited team size, awesome support, and a reasonable price tag."
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <img
            className={clsx('no-auto-height', styles.heroImage)}
            src={useBaseUrl('img/phoenix.svg')}
            alt="Phoenix Docs"
          />
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('getting-started')}
            >
              Open Docs
            </Link>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('getting-started')}
            >
              Open Docs
            </Link>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('getting-started')}
            >
              Open Docs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h2 className="text--center">Quick links</h2>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;