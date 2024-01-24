import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form, Background } from './styles';

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to keep track of everything you watch</p>

        <h2>Sign Up</h2>

        <Input placeholder='Name' type='text' icon={FiUser} />

        <Input placeholder='E-mail' type='text' icon={FiMail} />

        <Input placeholder='Password' type='password' icon={FiLock} />

        <Button title='Sign Up' />

        <a href='#'>Return to login</a>
      </Form>

      <Background />
    </Container>
  );
}
