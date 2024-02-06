import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../App/hooks/auth';
import { api } from '../../../App/services/api';
import avatarPlaceholder from '../../layouts/assets/avatar_placeholder.svg';
import { Input } from '../Input';

import { Container, Profile, Logout } from './styles';

export function Header({ ...props }) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation('/');
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <div>
        <Link to='/'>
          <h1>RocketMovies</h1>
        </Link>
      </div>

      <Input
        type='search'
        placeholder='Search by title'
        icon={FiSearch}
        {...props}
      />

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}>Logout</Logout>
        </div>
        <Link to='/profile'>
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
