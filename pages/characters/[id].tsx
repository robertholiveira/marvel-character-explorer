import CharacterDetails from '@/components/CharacterDetails';
import CharacterList from '@/components/CharacterList';
import Header from '@/components/Header';
import { GetServerSideProps, GetServerSidePropsContext, InferGetStaticPropsType, NextPage } from 'next';

type PageProps = {
  character: Character
}



export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
  const { query: { id } } = context;
  const res = await fetch(`http://localhost:3000/api/characters/${id}`);

  if (res.status === 404) {
    return { notFound: true }
  }
  const character: Character = await res.json();

  const props: PageProps = {
    character
  }
  return { props };
};



const CharacterPage: NextPage<PageProps> = ({ character }) => {
  return (
    <>
      <Header />
      <CharacterDetails character={character} />
      <h2 style={{ padding: 20, textAlign: 'center', fontSize: 30 }}>Related characters</h2>
      <CharacterList characters={character.relatedTo} />
    </>)
}

export default CharacterPage
