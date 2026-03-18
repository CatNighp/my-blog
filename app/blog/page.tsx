// app/blog/page.tsx
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main>
      <h1>ブログ記事一覧</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <span>{article.date}</span>
            <Link href={`/blog/${article.id}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}