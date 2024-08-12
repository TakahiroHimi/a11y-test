import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  return (
    <main>
      <h1>サンプルページ一覧</h1>
      <section>
        <h2>titleが不完全になる例</h2>
        <ul>
          <li>
            <Link href={"/users_fault_title/foo"}>労務華子さんのページへ</Link>
          </li>
          <li>
            <Link href={"/users_fault_title/bar"}>青木良子さんのページへ</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>titleに「読み込み中」を表示する例</h2>
        <ul>
          <li>
            <Link href={"/users_loading/foo"}>労務華子さんのページへ</Link>
          </li>
          <li>
            <Link href={"/users_loading/bar"}>青木良子さんのページへ</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>titleの情報を遷移元から渡す例</h2>
        <ul>
          <li>
            <Link href={"/users_param/foo?name=労務華子"}>
              労務華子さんのページへ
            </Link>
          </li>
          <li>
            <Link href={"/users_param/bar?name=青木良子"}>
              青木良子さんのページへ
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
