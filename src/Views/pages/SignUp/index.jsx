import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../../App/services/api';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Background, Container, Form } from './styles';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Please fill in all fields!');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('User successfully registered!');
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Unable to register!');
        }
      });
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

          <h2>Sign Up</h2>

          <Input
            placeholder='Name'
            type='text'
            icon={FiUser}
            onChange={(e) => setName(e.target.value)}
          />

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

          <Button title='Sign Up' onClick={handleSignUp} />

          <Link to='/'>
            <FiArrowLeft />
            Return to login
          </Link>
        </Form>

        <Background />
      </Container>
    </motion.div>
  );
}
