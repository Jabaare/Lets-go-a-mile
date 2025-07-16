import Layout from '../components/Layout';
export default function Events() {
  const upcoming = [
    { id: 1, name: 'Weekend Group Run', date: '2025-08-01' },
    { id: 2, name: 'Kayaking Adventure', date: '2025-08-15' },
  ];
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
      <ul className="space-y-4">
        {upcoming.map(e => (
          <li key={e.id} className="p-4 bg-cream rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold">{e.name}</h3>
            <p className="mt-1">{e.date}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
