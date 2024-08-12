/* eslint-disable @next/next/no-html-link-for-pages */
import { NextPage } from "next";

import Head from "next/head";
import { useGetUser } from "@/useGetUser";

const User: NextPage = () => {
  const { user } = useGetUser();

  return (
    <>
      <Head>
        <title>{user?.name}さんのページ</title>
      </Head>
      <main>
        <p>データフェッチ中、titleが「さんのページ」になってしまう。</p>
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
