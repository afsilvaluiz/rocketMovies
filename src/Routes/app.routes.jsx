import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Details } from '../Views/pages/Details';
import { Home } from '../Views/pages/Home';
import { New } from '../Views/pages/New';
import { Profile } from '../Views/pages/Profile';

export function AppRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </AnimatePresence>
  );
}
