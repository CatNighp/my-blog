import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function BlogPage(){
  const articles = getAllArticles();
  
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">記事一覧</h1>
      <ul className="flex flex-col gap-4">
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/blog/${article.id}`}>
            <div className="p-6 bg-white rounded-lg border boder-gray-200 hover:border-gray-400 transition-colors">
              <p className="text-sm text-gray-500 mb-1">{article.date}</p>
              <h2 className="text-1 font-semibold text-gray-900">{article.title}</h2>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}