import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form } from './styles';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch</p>

        <h2>Log in</h2>

        <Input placeholder='E-mail' type='text' icon={FiMail} />

        <Input placeholder='Password' type='password' icon={FiLock} />

        <Button title='Enter' />

        <a href='#'>Sign Up</a>
      </Form>
    </Container>
  );
}