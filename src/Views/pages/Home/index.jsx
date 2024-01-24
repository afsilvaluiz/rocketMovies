import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';

import { Container, Content, AddMovie } from './styles';

export function Home() {
  return (
    <Container>
      <Header readerOnly />

      <main>
        <header className='myMovie'>
          <h1>My Movies</h1>

          <AddMovie>
            <FiPlus />
            Movie
          </AddMovie>
        </header>
        <Content>
          <Movies
            data={{
              title: 'Interestellar',
              tags: [
                { id: '1', name: 'Drama' },
                { id: '2', name: 'Science Fiction' },
              ],
            }}
          />
        </Content>
      </main>
    </Container>
  );
}
