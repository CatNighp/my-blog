import Link from "next/link";

export default function NotFound(){
    return (
        <main>
            <h1>404 - ページが見つかりません</h1>
            <p>お探しのページは存在しないか、削除された可能性があります。</p>
            <Link href="/">トップへ戻る</Link>
        </main>
    );
}

/*
Next.jsの「特別なファイル名」
app/not-found.tsx  404ページ
app/error.tsx  エラーページ
app/loading.tsx  ローディング中の表示
app/layout.tsx  共通レイアウト
*/