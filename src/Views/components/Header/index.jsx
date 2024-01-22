import { Input } from '../Input';

import { Container, Profile, Logout } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <a href='#'>
          <h1>RocketMovies</h1>
        </a>
      </div>

      <Input type='search' placeholder='Search by title' />

      <Profile>
        <div>
          <strong>Luiz Silva</strong>
          <Logout>Logout</Logout>
        </div>
        <img src='https://github.com/afsilvaluiz.png' alt='Profile image' />
      </Profile>
    </Container>
  );
}
