import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../App/hooks/auth';
import { Input } from '../Input';

import { Container, Profile, Logout } from './styles';

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <div>
        <Link to='/'>
          <h1>RocketMovies</h1>
        </Link>
      </div>

      <Input type='search' placeholder='Search by title' icon={FiSearch} />

      <Profile>
        <div>
          <strong>Luiz Silva</strong>
          <Logout onClick={signOut}>Logout</Logout>
        </div>
        <img src='https://github.com/afsilvaluiz.png' alt='Profile image' />
      </Profile>
    </Container>
  );
}
