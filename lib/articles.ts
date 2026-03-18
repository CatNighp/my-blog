// lib/articles.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Article = {
  id: string;
  title: string;
  date: string;
  content: string;
};

// postsフォルダのパス
const postsDirectory = path.join(process.cwd(), "posts");

// 全記事を取得
export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // gray-matterでフロントマターと本文を分離
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title,
      date: data.date,
      content,
    };
  });
}

// idで1件取得
export function getArticleById(id: string): Article | undefined {
  return getAllArticles().find((article) => article.id === id);
}