import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Import the SVG using the same pattern as in your example
const HeroSvg = require('@site/static/img/banner.svg').default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <section className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left Section (Text and Buttons) */}
          <div className={styles.leftSection}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary button--lg', styles.buttonPrimary)}
                to="/docs/intro"
              >
                Get Started
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.buttonSecondary)}
                to="/docs/intro"
              >
                Documentation
              </Link>
            </div>
          </div>

          {/* Right Section (SVG Image) */}
          <div className={styles.rightSection}>
            <HeroSvg className={clsx(styles.heroSvg, 'animate-svg')} role="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
