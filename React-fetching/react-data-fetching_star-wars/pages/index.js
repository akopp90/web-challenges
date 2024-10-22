import Link from 'next/link';
import styled from 'styled-components';
import Layout from "../components/Layout";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 1rem 0;
`;

export default function HomePage() {
  return (
    <Layout>
      <h1>React Data Fetching: Star Wars</h1>
      <List>
        <ListItem>
          <Link href="/characters/1">Luke Skywalker</Link>
        </ListItem>
        <ListItem>
          <Link href="/characters/2">C-3PO</Link>
        </ListItem>
        <ListItem>
          <Link href="/characters/3">R2-D2</Link>
        </ListItem>
        <ListItem>
          <Link href="/characters/4">Darth Vader</Link>
        </ListItem>
      </List>
    </Layout>
  );
}