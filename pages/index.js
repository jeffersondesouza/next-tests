import React from "react";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import Layout from "../components/MyLayout";
import Link from "next/link";
import styled from "styled-components";

// import dynamic from 'next/dynamic';

// const Highlight = dynamic(() => import('"../components/MyLayout'));

const List = styled.ul`
  list-style: none;
  background: lightgray;
  padding: 20px 10px;
`;

const PostLink = props => (
  <li>
    <Link href="/show/[id]" as={`/show/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = props => {
  const { shows = [] } = props;

  return (
    <Layout>
      <h1>Hello Next Blog</h1>
      <List>
        {shows.map(show => (
          <PostLink key={show.id} id={show.id} title={show.name} />
        ))}
      </List>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
