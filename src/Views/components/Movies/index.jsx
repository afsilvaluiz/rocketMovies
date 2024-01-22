import { Stars } from '../Stars';
import { Tag } from '../Tag';

import { Container } from './styles';

export function Movies() {
  return (
    <Container>
      <h1>Interestellar</h1>

      <Stars />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis
        nesciunt assumenda quibusdam provident vel cum dolorum, fugiat
        exercitationem cupiditate neque, at, id facilis nam! Veritatis aperiam
        debitis at quas.
      </p>

      <footer>
        <Tag title='Drama' />
        <Tag title='Science fiction' />
      </footer>
    </Container>
  );
}
