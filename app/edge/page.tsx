import { headers } from 'next/headers';
import { Footer } from '../components/footer';
import { Region } from '../components/region';
import { Illustration } from '../components/illustration';
import { parseVercelId } from '../parse-vercel-id';

export const runtime = 'edge';

let isCold = true;

export default function Page() {
  const headersList = headers();
  const { proxyRegion, computeRegion } = parseVercelId(
    headersList.get('x-vercel-id')
  );
  const date = new Date().toISOString();
  isCold = false;

  return (
    <>
      <main>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Proxy Region</span>
            <Region region={proxyRegion} />
          </div>
          <div className="info">
            <span>Compute Region</span>
            <Region region={computeRegion} />
          </div>
        </div>
      </main>

      <Footer>
        <p>
          Generated at {date} <span data-break /> ({isCold ? 'cold' : 'hot'}) by{' '}
          <a
            href="https://vercel.com/docs/concepts/functions/edge-functions"
            target="_blank"
            rel="noreferrer"
          >
            Vercel Edge Runtime
          </a>
        </p>
      </Footer>
    </>
  );
}
