import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';

import { Container, Content, NewMovie } from './styles';

export function Home() {
  return (
    <Container>
      <Header readerOnly />

      <main>
        <header className='myMovie'>
          <h1>My Movies</h1>

          <NewMovie>
            <FiPlus />
            Add Movie
          </NewMovie>
        </header>
        <Content>
          <Movies
            data={{
              title: 'Drama',
              tags: [
                { id: '1', name: 'drama' },
                { id: '2', name: 'science fiction' },
              ],
            }}
          />
          <Movies
            data={{
              title: 'Drama',
              tags: [
                { id: '1', name: 'drama' },
                { id: '2', name: 'science fiction' },
              ],
            }}
          />
          <Movies
            data={{
              title: 'Drama',
              tags: [
                { id: '1', name: 'drama' },
                { id: '2', name: 'science fiction' },
              ],
            }}
          />
        </Content>
      </main>
    </Container>
  );
}
