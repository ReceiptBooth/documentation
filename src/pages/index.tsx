import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Topic = {title: string; text: string; to: string};

const topics: Topic[] = [
  {
    title: 'Getting started',
    text: 'Unbox your booth, connect the tablet and printer, and install the app.',
    to: '/docs/welcome',
  },
  {
    title: 'Running an event',
    text: 'A simple checklist, plus how to exit photo mode and offer reprints.',
    to: '/docs/running-an-event/event-checklist',
  },
  {
    title: 'The app',
    text: 'Themes, print templates, the template editor and release notes.',
    to: '/docs/app',
  },
  {
    title: 'Printer and paper',
    text: 'Refill a roll, check the printer and plan your paper reorders.',
    to: '/docs/app/printer',
  },
  {
    title: 'Troubleshooting',
    text: 'Lines on prints, printer not connecting and other quick fixes.',
    to: '/docs/troubleshooting',
  },
  {
    title: 'Renting a booth',
    text: 'Collection, delivery, deposit and using a rental booth at your event.',
    to: '/docs/rentals',
  },
];

function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>Help centre</p>
        <Heading as="h1" className={styles.title}>
          How can we help?
        </Heading>
        <p className={styles.lede}>
          Everything you need to set up, run and look after your Receipt Booth.
        </p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/docs/welcome">
            Start with setup
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/troubleshooting">
            Fix a problem
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Help Centre"
      description="Setup guides, app help, printer and paper tips and troubleshooting for your Receipt Booth, the receipt photo booth made in Singapore.">
      <Hero />
      <main className="container">
        <ul className={styles.grid}>
          {topics.map((t) => (
            <li key={t.title}>
              <Link className={styles.card} to={t.to}>
                <span className={styles.cardTitle}>{t.title}</span>
                <span className={styles.cardText}>{t.text}</span>
              </Link>
            </li>
          ))}
        </ul>
        <section className={styles.strip}>
          <div>
            <Heading as="h2" className={styles.stripTitle}>
              Running low on paper?
            </Heading>
            <p>Receipt and sticker rolls made for your booth.</p>
          </div>
          <Link className="button button--outline button--secondary" to="https://receiptbooth.com/collections/paper">
            Buy paper
          </Link>
        </section>
        <p className={styles.contact}>
          Can't find what you need? <Link to="/docs/contact-support">Contact support</Link>.
        </p>
      </main>
    </Layout>
  );
}
