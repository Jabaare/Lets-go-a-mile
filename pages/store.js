import Layout from '../components/Layout';
export default function Store() {
  const products = [
    { id: 1, name: 'Performance Tee', price: '$25', img: '/tee.jpg' },
    { id: 2, name: 'Running Cap', price: '$15', img: '/cap.jpg' },
  ];
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Sports Apparel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-cream rounded-lg p-4">
            <img src={p.img} alt={p.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="mt-2 font-bold">{p.price}</p>
            <button className="mt-4 bg-primary text-cream px-4 py-2 rounded hover:bg-light-blue transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
