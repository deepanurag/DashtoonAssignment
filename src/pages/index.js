import Head from "next/head";
import { Form, Layout } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Comic Strips</title>
        <meta name="description" content="Best Comic Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Form />
      </Layout>
    </>
  );
}
