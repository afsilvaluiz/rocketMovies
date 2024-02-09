import { AnimatePresence, motion } from 'framer-motion';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.45 } }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Header onChange={(e) => setSearch(e.target.value)} />

        <main>
          <header className='myMovie'>
            <h1>My Movies</h1>
            <AddMovie to='/new'>
              <motion.div whileHover={{ scale: 0.85 }}>
                <FiPlus />
                Movie
              </motion.div>
            </AddMovie>
          </header>

          <Menu>
            <motion.div whileTap={{ scale: 0.85 }}>
              <Tags
                key='all'
                $isSelected={tagsSelected.length === 0}
                onClick={() => setTagsSelected([])}
              >
                All
              </Tags>
            </motion.div>
            {movie_tags
              .filter(
                (tag) =>
                  tagsSelected.length === 0 || tagsSelected.includes(tag),
              )
              .map((tag) => (
                <motion.div key={String(tag.id)} whileHover={{ scale: 0.85 }}>
                  <Tag
                    key={String(tag.id)}
                    title={tag.name}
                    $isSelected={tagsSelected.includes(tag)}
                    onClick={() => handleSelectTag(tag)}
                  >
                    {tag.name}
                  </Tag>
                </motion.div>
              ))}
          </Menu>

          <Content>
            <AnimatePresence>
              {movie_notes.map((note) => (
                <motion.div
                  key={String(note.id)}
                  layout
                  whileHover={{ scale: 1.05 }}
                >
                  <Movies
                    key={String(note.id)}
                    data={note}
                    onClick={() => handleDetails(note.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </Content>
        </main>
      </Container>
    </motion.div>
  );
}
