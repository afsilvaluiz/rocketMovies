import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../../App/services/api';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MoviesItem } from '../../components/MoviesItem';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Enter the movie's name!");
    }

    const isRatingValid = rating >= 0 && rating <= 5;

    if (!isRatingValid) {
      return alert('Enter a rating between 0 and 5!');
    }

    if (newTag) {
      return alert("There's a tag in the field, click 'Add' or leave it empty");
    }

    await api.post('/movie_notes', {
      title,
      description,
      rating,
      tags,
    });

    alert('Movie added successfully!');
    navigate(-1);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.45 } }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Header />

        <main>
          <Form>
            <header>
              <Link to='/'>
                <ButtonText icon={FiArrowLeft} title='Back' />
              </Link>

              <h1>New Movie</h1>
            </header>

            <div className='movieRating'>
              <Input
                className='title'
                placeholder='Title'
                type='text'
                onChange={(e) => setTitle(e.target.value)}
              />

              <Input
                className='rating'
                placeholder='Your rating (from 0 to 5)'
                type='number'
                min='0'
                max='5'
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>

            <Textarea
              placeholder='Comments'
              onChange={(e) => setDescription(e.target.value)}
            />

            <Section>
              <h2>Tags</h2>
              <div className='tags'>
                {tags.map((tag, index) => (
                  <MoviesItem
                    className='tag'
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}

                <MoviesItem
                  className='newTag'
                  isNew
                  placeholder='New tag'
                  onChange={(e) => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
              </div>
            </Section>

            <div className='saveChange'>
              <Button title='Discard' onClick={handleBack} />

              <Button title='Save' onClick={handleNewMovie} />
            </div>
          </Form>
        </main>
      </Container>
    </motion.div>
  );
}
