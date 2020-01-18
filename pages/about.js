import React from "react";
import Link from "next/link";
import withLayout from "../components/MyLayout/withLayout";

const Abaout = () => {
  return (
    <div>
      <p>This is the about page</p>
    </div>
  );
};

export default withLayout(Abaout);
