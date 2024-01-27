import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../Views/pages/SignIn';
import { SignUp } from '../Views/pages/SignUp';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
    </Routes>
  );
}
