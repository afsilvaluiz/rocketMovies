import { FiStar } from 'react-icons/fi';

import { Container } from './styles';

export function Stars({ rating }) {
  let myArray = new Array(5).fill(undefined);

  return (
    <Container>
      {myArray.map((e, index) => (
        <li key={String(index)} className={index + 1 <= rating ? 'bg' : ''}>
          <FiStar />
        </li>
      ))}
    </Container>
  );
}
