import React from "react";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content dinamic.</p>
    </div>
  );
};

export default Post;
