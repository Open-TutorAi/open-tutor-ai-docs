import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Smart Learning',
    Svg: require('@site/static/img/smart-learning.svg').default,
    description: 'AI-driven personalized learning paths that adapt to each student\'s unique needs and pace',
  },
  {
    title: 'Rich Content',
    Svg: require('@site/static/img/rich-content.svg').default,
    description: 'Access an extensive library of interactive materials, exercises, and real-world examples',
  },
  {
    title: 'Collaborative',
    Svg: require('@site/static/img/collaborative.svg').default,
    description: 'Learn together with peers through real-time collaboration and group learning features',
  },
];

function Feature({ title, Svg, description }) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

function RoleSection({ title, text, Svg }) {
  return (
    <div className={clsx('row', styles.roleSection)}>
      <div className={clsx('col col--6', styles.roleText)}>
        <div className="padding-horiz--md">
          <Heading as="h2" className={styles.roleTitle}>{title}</Heading>
          <p className={styles.roleDescription}>{text}</p>
        </div>
      </div>
      <div className={clsx('col col--6', 'text--center', styles.roleImageContainer)}>
        <Svg className={styles.roleImage} role="img" />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <RoleSection
          title="For Students"
          text="Open TutorAI provides students with AI-powered tutoring, helping them understand complex topics, practice problems, and receive instant feedback."
          Svg={require('@site/static/img/students.svg').default}
        />
        <RoleSection
          title="For Teachers"
          text="Teachers can use Open TutorAI to create personalized learning experiences, track student progress, and get insights into learning patterns."
          Svg={require('@site/static/img/teachers.svg').default}
        />
        <RoleSection
          title="For Parents"
          text="Parents can stay informed about their child's learning journey, receive progress reports, and access recommendations to support their child's education."
          Svg={require('@site/static/img/parents.svg').default}
        />
      </div>
    </section>
  );
}
