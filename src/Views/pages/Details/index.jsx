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

      <main>
        <Content>
          <header>
            <div>
              <a href='#'>
                <ButtonText icon={FiArrowLeft} title='Back' />
              </a>

              <ButtonText icon={FiDelete} title='Delete Movie' />
            </div>
          </header>
          <section>
            <div>
              <h1>Interestellar</h1>
              <Stars />
              <Stars />
              <Stars />
              <Stars />
              <Stars />
            </div>

            <div className='movie-info'>
              <p>
                <img
                  src='https://github.com/afsilvaluiz.png'
                  alt='Profile image'
                />
                By Luiz Silva
              </p>

              <div>
                <FiClock />

                <p>18/01/24 às 13:00</p>
              </div>
            </div>
          </section>

          <div>
            <Tag title='Drama' />
            <Tag title='Science Fiction' />
          </div>

          <article>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              accusamus excepturi odit totam numquam dolore architecto,
              molestiae temporibus, dignissimos, expedita fugit veritatis soluta
              accusantium consectetur placeat? Itaque illo harum dolor. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Magni
              accusamus excepturi odit totam numquam dolore architecto,
              molestiae temporibus, dignissimos, expedita fugit veritatis soluta
              accusantium consectetur placeat? Itaque illo harum dolor. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Magni
              accusamus excepturi odit totam numquam dolore architecto,
              molestiae temporibus, dignissimos, expedita fugit veritatis soluta
              accusantium consectetur placeat? Itaque illo harum dolor. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Magni
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
