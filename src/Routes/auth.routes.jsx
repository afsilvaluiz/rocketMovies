import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SignIn } from '../Views/pages/SignIn';
import { SignUp } from '../Views/pages/SignUp';

export function AuthRoutes() {
  const user = localStorage.getItem('@rocketmovies:user');

  return (
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />

        {!user && <Route path='*' element={<Navigate to='/' />} />}
      </Routes>
    </AnimatePresence>
  );
}
