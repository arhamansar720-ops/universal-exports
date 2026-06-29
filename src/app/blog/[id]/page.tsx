import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { POSTS } from '@/lib/data';

export function generateStaticParams() {
  return POSTS.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = POSTS.find((p) => p.id === Number(params.id));
  if (!post) return {};
  return { title: `${post.title} — Universal Exports`, description: post.exc };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = POSTS.find((p) => p.id === Number(params.id));
  if (!post) notFound();

  const related = POSTS.filter((p) => p.id !== post.id && p.cat === post.cat).slice(0, 3);
  const fallbackRelated = POSTS.filter((p) => p.id !== post.id).slice(0, 3);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  return (
    <>
      <Navbar />

      {/* ── POST HERO ────────────────────────────── */}
      <section className="page-hero page-hero--short">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.img} alt={post.title} className="hero-bg-img" />
        <div className="hero-bg-ov" />
        <div className="page-hero-body">
          <span className="sec-tag">{post.cat}</span>
          <h1 className="page-hero-h1" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            {post.title}
          </h1>
          <div className="post-meta">
            <div className="blog-av">{post.author.split(' ').map((w) => w[0]).join('')}</div>
            <span>{post.author}</span>
            <span className="post-meta-dot">·</span>
            <span>{post.date}</span>
            <span className="post-meta-dot">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── POST BODY ────────────────────────────── */}
      <section style={{ padding: '64px 0 80px' }}>
        <div className="post-wrap">
          <div className="post-body">
            <p className="post-lead">{post.exc}</p>

            <h2>Key Insights</h2>
            <p>
              The international trade landscape continues to evolve rapidly, presenting both
              challenges and opportunities for Nigerian exporters. Understanding these dynamics
              is essential for maintaining competitive advantage in global markets.
            </p>
            <p>
              At Universal Exports, we work closely with hundreds of businesses to navigate
              these complexities. Here are the most important things you need to know.
            </p>

            <h2>What This Means for Your Business</h2>
            <p>
              For exporters operating from Nigeria, the implications are significant. Whether
              you&apos;re shipping ocean freight to Europe or air cargo to North America,
              staying compliant with the latest regulations is not optional — it&apos;s the
              foundation of sustainable international trade.
            </p>
            <p>
              Our compliance team monitors regulatory changes across all major trade routes
              and proactively updates clients when requirements change. This means you can
              focus on your core business while we handle the regulatory complexity.
            </p>

            <h2>Practical Steps You Can Take Now</h2>
            <p>
              The best approach is proactive rather than reactive. Here&apos;s what we
              recommend for businesses looking to strengthen their export operations:
            </p>
            <ul>
              <li>Review your current documentation processes against the latest requirements</li>
              <li>Ensure your HS code classifications are current and accurate</li>
              <li>Work with a licensed customs broker for all cross-border shipments</li>
              <li>Maintain comprehensive records of all export transactions</li>
              <li>Consider cargo insurance to protect against transit risks</li>
            </ul>

            <h2>How Universal Exports Can Help</h2>
            <p>
              Our team of 120+ logistics specialists is equipped to handle all aspects of
              your export operations. From initial documentation to final delivery and
              customs clearance at the destination, we provide end-to-end support that
              gives you complete peace of mind.
            </p>
            <p>
              Contact us today to discuss your specific requirements and get a customised
              solution for your business.
            </p>

            <div className="post-cta">
              <Link href="/contact" className="btn-primary">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ────────────────────────── */}
      <section style={{ padding: '0 0 80px', background: 'var(--light-bg)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '48px 40px 0' }}>
          <h2 className="sec-h2" style={{ marginBottom: 32 }}>Related Articles</h2>
          <div className="blog-grid">
            {relatedPosts.map((p) => (
              <Link key={p.id} href={`/blog/${p.id}`} className="blog-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} />
                <div className="blog-card-body">
                  <div className="blog-cat">{p.cat}</div>
                  <div className="blog-card-title">{p.title}</div>
                  <div className="blog-card-exc">{p.exc.substring(0, 110)}…</div>
                  <div className="blog-card-foot">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div className="blog-av">{p.author.split(' ').map((w) => w[0]).join('')}</div>
                      <span>{p.author} · {p.date}</span>
                    </div>
                    <span>{p.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
