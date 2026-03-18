import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800">
          MyBlog
        </Link>
        <nav className="flex gap-4">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            トップ
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            記事一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}