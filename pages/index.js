import React from "react";
import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Index = () => {
  return (
    <Layout>
      <h1>Hello Next Blog</h1>

      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
};

export default Index;
