import Link from "next/link";

export default function Header(){
  return (
    <header>
      <Link href="/">MyBlog</Link>
      <nav>
        <Link href="/">トップ</Link>
        <Link href="/blog">記事一覧</Link>
      </nav>
    </header>
  );
}