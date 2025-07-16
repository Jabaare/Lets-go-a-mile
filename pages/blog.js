import Layout from '../components/Layout';
export default function Blog() {
  const posts = [
    { id: 1, title: 'Trail Running Tips', excerpt: 'Master your first trail run...', slug: 'trail-tips' },
    { id: 2, title: 'Gear Essentials', excerpt: 'What to pack for kayaking...', slug: 'gear-essentials' },
  ];
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">On the Trail Blog</h2>
      <div className="space-y-6">
        {posts.map(p => (
          <article key={p.id} className="p-4 bg-cream rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="mb-4">{p.excerpt}</p>
            <a href={`/blog/${p.slug}`} className="text-primary underline">
              Read more
            </a>
          </article>
        ))}
      </div>
    </Layout>
  );
}
