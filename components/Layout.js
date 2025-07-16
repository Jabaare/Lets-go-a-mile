import Link from 'next/link';
import Footer from './Footer';
export default function Layout({ children }) {
  return (
    <>
      <header className="bg-primary text-cream p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Let’s Go a Mile</h1>
        <nav className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/store">Store</Link>
          <Link href="/blog">On the Trail Blog</Link>
          <Link href="/join">Join Us</Link>
        </nav>
      </header>
      <main className="p-8">{children}</main>
      <Footer />
    </>
  );
}
