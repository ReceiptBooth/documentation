import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';

// Shorter, plainer 404 in the app's style (replaces the default Docusaurus wording).
export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container', className)}>
      <div className="rb-notfound">
        <p className="rb-caption">Not found</p>
        <Heading as="h1">This page does not exist</Heading>
        <p>The link may be old, or the page has moved.</p>
        <Link className="button button--primary" to="/">
          Go to the help centre
        </Link>
      </div>
    </main>
  );
}
