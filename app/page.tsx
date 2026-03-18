// コンポーネントの型定義
type ArticleCardProps = {
  title: string;
  date: string;
};

// ArticalCardコンポーネント（カードのパーツ）
function ArticleCard({ title, date }: ArticleCardProps){
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
}

// Homeコンポーネント（ページ本体）
export default function Home(){
  return(
    <main>
      <h1>my blog page</h1>

      {/* ArticleCardを呼び出す。HTMLと同じ感覚 */}
      <ArticleCard title="Start the Next.js" date="2026-03-15" />
      <ArticleCard title="what is TypeScript?" date="2026-03-16" />
    </main>
  );
}