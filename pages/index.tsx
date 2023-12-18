import CharacterList from '@/components/CharacterList';
import Header from '@/components/Header';
import { InferGetStaticPropsType } from 'next';

export async function getServerSideProps() {
  const res = await
    fetch("http://localhost:3000/api/characters");
  const result = await res.json();
  const characters: Character[] = result;
  return {
    props: {
      characters,
    }
  };
}

export default function Home({
  characters,
}: InferGetStaticPropsType<typeof getServerSideProps>) {

  return (
    <>
      <Header />
      <CharacterList characters={characters} />
    </>)
}
