/* eslint-disable @next/next/no-html-link-for-pages */
import { NextPage } from "next";

import Head from "next/head";
import { useGetUser } from "@/useGetUser";
import { useSearchParams } from "next/navigation";

const User: NextPage = () => {
  const { user } = useGetUser();
  const searchParams = useSearchParams();
  const titleName = searchParams.get("name");

  return (
    <>
      <Head>
        <title>{titleName}さんのページ</title>
      </Head>
      <main>
        <p>titleに表示する内容をクエリパラメータなどで渡す</p>
        <p>
          <a href="/">TOPへ戻る</a>
        </p>
        {user ? (
          <>
            <h1>{user.name}さんのページ</h1>
            <p>userID: {user.id}</p>
            <p>userName: {user.name}</p>
          </>
        ) : (
          <>Loading...</>
        )}
      </main>
    </>
  );
};

export default User;
