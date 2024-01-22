import { FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';

import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <Header readerOnly />

      <main>
        <header>
          <h1>My Movies</h1>
          {/* New Movie -- page */}
          <FiPlus />
          Add Movie
        </header>
        <Content>
          <Movies />
        </Content>
      </main>
    </Container>
  );
}
