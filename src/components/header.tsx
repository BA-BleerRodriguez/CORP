import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 w-full text-white">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-8">
        <Link href="/" className="text-3xl font-bold">
          Home
        </Link>
        <div className="flex flex-wrap items-center gap-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </header>
  );
}
