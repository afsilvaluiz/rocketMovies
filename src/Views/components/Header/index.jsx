import { Input } from '../Input';

import { Container, Brand, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <Brand>
        <a href='#'>
          <h1>RocketMovies</h1>
        </a>
      </Brand>

      <Input type='search' placeholder='Search by title' />

      <Profile>
        <div>
          <strong>Luiz Silva</strong>
        </div>

        <img src='https://github.com/afsilvaluiz.png' alt='Profile image' />
      </Profile>

      <Logout>Logout</Logout>
    </Container>
  );
}
