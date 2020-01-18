import React from "react";
import { useRouter } from "next/router";
import withLayout from "../components/MyLayout/withLayout";

const post = () => {
  const router = useRouter();
  console.log("router:", router);

  return (
    <div>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content!</p>
    </div>
  );
};

export default withLayout(post);
