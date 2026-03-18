// app/blog/[id]/page.tsx
import { getArticleById } from "@/lib/articles";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const article = getArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <p>{article.date}</p>
      <h1>{article.title}</h1>
      {/* マークダウンをHTMLに変換して表示 */}
      <MDXRemote source={article.content} />
    </main>
  );
}
