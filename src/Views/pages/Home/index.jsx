import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { api } from '../../../App/services/api';
import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';

import { Container, Content, AddMovie } from './styles';

export function Home() {
  const [movie_notes, setNotes] = useState([]);
  const [movie_tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const [tagsSelected, setTagsSelected] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/movie_notes?title=${search}&movie_tags=${tagsSelected}`,
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/movie_tags');
      setTags(response.data);
    }
    fetchTags();
  }, []);

  return (
    <Container>
      <Header onChange={(e) => setSearch(e.target.value)} />

      <main>
        <header className='myMovie'>
          <h1>My Movies</h1>

          <AddMovie to='/new'>
            <FiPlus />
            Movie
          </AddMovie>
        </header>
        <Content>
          {movie_notes.map((note) => (
            <Movies key={String(note.id)} data={note} />
          ))}
        </Content>
      </main>
    </Container>
  );
}
