import { FiArrowLeft } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MoviesItem } from '../../components/MoviesItem';
import { Section } from '../../components/Section';
import { Textarea } from '../../components/Textarea';

import { Container, Form } from './styles';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href='#'>
              <ButtonText icon={FiArrowLeft} title='Back' />
            </a>

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
              <MoviesItem className='tag' value='Drama' />

              <MoviesItem className='newTag' isNew placeholder='New tag' />
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
