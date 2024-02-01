import { useState } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../../App/hooks/auth';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Form, Avatar } from './styles';

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  return (
    <Container>
      <header>
        <Link to='/'>
          <FiArrowLeft />
          Back
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src='https://github.com/afsilvaluiz.png' alt='User image' />
          <label htmlFor='avatar'>
            <FiCamera />

            <input id='avatar' type='file' />
          </label>
        </Avatar>

        <Input
          placeholder='Name'
          type='text'
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder='Current password'
          type='password'
          icon={FiLock}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder='New password'
          type='password'
          icon={FiLock}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title='Save' />
      </Form>
    </Container>
  );
}
