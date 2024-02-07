import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { api } from '../../../App/services/api';
import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';
import { Tag } from '../../components/Tag';

import { AddMovie, Container, Content, Menu, Tags } from './styles';

export function Home() {
  const [movie_notes, setNotes] = useState([]);
  const [movie_tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const [tagsSelected, setTagsSelected] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      let tagNames = '';
      if (tagsSelected.length > 0) {
        tagNames = tagsSelected.map((tag) => tag.name).join(',');
      }
      const response = await api.get(
        `/movie_notes?title=${search}&movie_tags=${tagNames}`,
      );
      setNotes(response.data);
    }

    fetchNotes();
  }, [search, tagsSelected]);

  const handleSelectTag = (tag) => {
    const isTagSelected = tagsSelected.includes(tag);
    setTagsSelected(
      isTagSelected
        ? tagsSelected.filter((item) => item !== tag)
        : [...tagsSelected, tag],
    );
  };

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

        <Menu>
          <Tags
            key='all'
            $isSelected={tagsSelected.length === 0}
            onClick={() => setTagsSelected([])}
          >
            All
          </Tags>
          {movie_tags
            .filter(
              (tag) => tagsSelected.length === 0 || tagsSelected.includes(tag),
            )
            .map((tag) => (
              <Tag
                key={String(tag.id)}
                title={tag.name}
                $isSelected={tagsSelected.includes(tag)}
                onClick={() => handleSelectTag(tag)}
              >
                {tag.name}
              </Tag>
            ))}
        </Menu>

        <Content>
          {movie_notes.map((note) => (
            <Movies
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))}
        </Content>
      </main>
    </Container>
  );
}
