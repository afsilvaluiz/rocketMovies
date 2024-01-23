import { Stars } from '../Stars';
import { Tag } from '../Tag';

import { Container } from './styles';

export function Movies({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>Interestellar</h1>

      <Stars />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis
        nesciunt assumenda quibusdam provident vel cum dolorum, fugiat
        exercitationem cupiditate neque, at, id facilis nam! Veritatis aperiam
        debitis at quas.
      </p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
