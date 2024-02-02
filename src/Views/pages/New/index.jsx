import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MoviesItem } from '../../components/MoviesItem';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  return (
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
            <Input className='title' placeholder='Title' type='text' />

            <Input
              className='rating'
              placeholder='Your rating (from 0 to 5)'
              type='number'
              min='0'
              max='5'
            />
          </div>

          <Textarea placeholder='Comments' />

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
            <Button title='Discard changes' />

            <Button title='Save changes' />
          </div>
        </Form>
      </main>
    </Container>
  );
}
