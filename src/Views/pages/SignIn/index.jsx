import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../App/hooks/auth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Background, Container, Form } from './styles';

export function SignIn() {
  const data = useAuth();
  console.log('MEU CONTEXTO ➡️', data);

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch</p>

        <h2>Log in</h2>

        <Input placeholder='E-mail' type='text' icon={FiMail} />

        <Input placeholder='Password' type='password' icon={FiLock} />

        <Button title='Enter' />

        <Link to='/register'>Sign Up</Link>
      </Form>

      <Background />
    </Container>
  );
}
