import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Welcome to Let’s Go a Mile</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Join our inclusive community and explore running, kayaking, and more.
          Embrace adventure and personal growth with us!
        </p>
        <a href="/join" className="bg-primary text-cream px-6 py-3 rounded-full font-semibold hover:bg-light-blue transition">
          Join Now
        </a>
      </section>
    </Layout>
  );
}
