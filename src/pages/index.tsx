import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Row = {title: string; line: string; to: string};

const guides: Row[] = [
  {title: 'Getting started', line: 'Unbox, connect, install the app.', to: '/docs/welcome'},
  {title: 'Running an event', line: 'Checklist, exit photo mode, reprints.', to: '/docs/running-an-event/event-checklist'},
  {title: 'The app', line: 'Themes, print templates, release notes.', to: '/docs/app'},
  {title: 'Printer and paper', line: 'Test print, refill a roll, reorder.', to: '/docs/app/printer'},
  {title: 'Troubleshooting', line: 'Lines on prints, printer not found.', to: '/docs/troubleshooting'},
  {title: 'Renting a booth', line: 'Collection, delivery, deposit.', to: '/docs/rentals'},
];

// Short answers from the guides, printed like a receipt.
const fixes: {q: string; a: string; to: string}[] = [
  {q: 'Leave photo mode', a: 'Tap top left 5x', to: '/docs/app/exit-photo-mode'},
  {q: 'No printers found', a: 'Check power + USB', to: '/docs/app/printer'},
  {q: 'Lines across prints', a: 'Brighter room', to: '/docs/app/lines-on-prints'},
  {q: 'Screen dims', a: 'Stay awake on', to: '/docs/running-your-booth/tablet-settings'},
  {q: 'Prints per roll', a: 'About 200–400', to: '/docs/printer-and-paper/paper-and-reorders'},
];

function Chevron(): ReactNode {
  return (
    <svg className={styles.chev} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function Home(): ReactNode {
  const logo = useBaseUrl('/img/logo.svg');
  return (
    <Layout
      title="Help Centre"
      description="Setup, app, printer, paper and troubleshooting guides for your Receipt Booth.">
      <main className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.caption}>Help centre</p>
          <Heading as="h1" className={styles.title}>
            How can we help?
          </Heading>
          <p className={styles.line}>Set up, run and look after your booth.</p>
          <div className={styles.actions}>
            <Link className={styles.btnFilled} to="/docs/welcome">
              Start with setup
            </Link>
            <Link className={styles.textAction} to="/docs/troubleshooting">
              Fix a problem
            </Link>
          </div>
        </header>

        <section className={styles.split}>
          <div className={styles.head}>
            <Heading as="h2" className={styles.h2}>
              Guides
            </Heading>
          </div>
          <ul className={styles.rows}>
            {guides.map((g) => (
              <li key={g.title}>
                <Link className={styles.row} to={g.to}>
                  <span className={styles.body}>
                    <span className={styles.rowTitle}>{g.title}</span>
                    <span className={styles.small}>{g.line}</span>
                  </span>
                  <Chevron />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.split}>
          <div className={styles.head}>
            <Heading as="h2" className={styles.h2}>
              Quick fixes
            </Heading>
            <p className={styles.headLine}>Each one opens the full guide.</p>
          </div>
          <div className={styles.stage}>
            <div className={styles.slot} aria-hidden="true" />
            <div className={styles.slip}>
              <img className={styles.slipLogo} src={logo} alt="Receipt Booth" width={150} height={26} />
              <p className={styles.slipSub}>Quick fixes</p>
              <div className={styles.dots} aria-hidden="true" />
              <ul className={styles.slipLines}>
                {fixes.map((f) => (
                  <li key={f.q}>
                    <Link className={styles.ln} to={f.to}>
                      <span>{f.q}</span>
                      <span className={styles.lead} aria-hidden="true" />
                      <span className={styles.amt}>{f.a}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.dots} aria-hidden="true" />
              <Link className={styles.thanks} to="/docs/contact-support">
                Still stuck? Contact us
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.split}>
          <div className={styles.head}>
            <Heading as="h2" className={styles.h2}>
              Paper and support
            </Heading>
          </div>
          <ul className={styles.rows}>
            <li>
              <Link className={styles.row} to="https://receiptbooth.com/collections/paper">
                <span className={styles.body}>
                  <span className={styles.rowTitle}>Buy paper</span>
                  <span className={styles.small}>Receipt and sticker rolls for your booth.</span>
                </span>
                <span className={styles.value}>receiptbooth.com</span>
                <Chevron />
              </Link>
            </li>
            <li>
              <Link className={styles.row} to="/docs/contact-support">
                <span className={styles.body}>
                  <span className={styles.rowTitle}>Contact support</span>
                  <span className={styles.small}>What to send us, and the warranty.</span>
                </span>
                <Chevron />
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
