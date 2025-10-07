import Link from 'next/link';
export default function Navbar(){
  return(<nav className="w-full bg-white border-b"><div className="max-w-6xl mx-auto p-4 flex justify-between">
    <Link href="/" className="font-bold text-lg">RustyTraders</Link>
    <div className="flex gap-4"><Link href="/auth/login">Login</Link><Link href="/auth/register" className="bg-blue-600 text-white px-3 py-1 rounded">Register</Link></div>
  </div></nav>);
}

