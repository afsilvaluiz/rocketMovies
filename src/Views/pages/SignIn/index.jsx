import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../App/hooks/auth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Background, Container, Form } from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Form>
          <h1>RocketMovies</h1>
          <p>Application to keep track of everything you watch</p>

          <h2>Log in</h2>

          <Input
            placeholder='E-mail'
            type='text'
            icon={FiMail}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder='Password'
            type='password'
            icon={FiLock}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button title='Enter' onClick={handleSignIn} />

          <Link to='/register'>Sign Up</Link>
        </Form>

        <Background />
      </Container>
    </motion.div>
  );
}
