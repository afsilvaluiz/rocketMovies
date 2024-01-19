import { FiArrowLeft, FiClock, FiDelete } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

import { Container, Content } from './styles';

export function Details() {
  return (
    <Container>
      <Header readerOnly />

      <div>
        <a href='#'>
          <ButtonText icon={FiArrowLeft} title='Back' />
        </a>

        <ButtonText icon={FiDelete} title='Delete Movie' />
      </div>
      <main>
        <Content>
          <header>
            <div>
              <h1>Interestellar</h1>

              <Stars />
            </div>
            <div>
              <img
                src='https://github.com/afsilvaluiz.png'
                alt='Profile image'
              />

              <span>By Luiz Silva</span>

              <FiClock />

              <span>18/01/24 às 13:00</span>
            </div>
          </header>

          <div>
            <Tag title='Drama' />
            <Tag title='Science fiction' />
          </div>

          <article>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              accusamus excepturi odit totam numquam dolore architecto,
              molestiae temporibus, dignissimos, expedita fugit veritatis soluta
              accusantium consectetur placeat? Itaque illo harum dolor.
            </p>
          </article>
        </Content>
      </main>
    </Container>
  );
}
