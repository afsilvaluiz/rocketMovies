import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../App/hooks/auth';
import { api } from '../../../App/services/api';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import avatarPlaceholder from '../../layouts/assets/avatar_placeholder.svg';

import { Avatar, Container, Form } from './styles';

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.45 } }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <header>
          <button type='button' onClick={handleBack}>
            <FiArrowLeft />
            Back
          </button>
        </header>

        <Form>
          <Avatar>
            <img src={avatar} alt='User image' />
            <label htmlFor='avatar'>
              <FiCamera />

              <input id='avatar' type='file' onChange={handleChangeAvatar} />
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

          <Button title='Save' onClick={handleUpdate} />
        </Form>
      </Container>
    </motion.div>
  );
}
