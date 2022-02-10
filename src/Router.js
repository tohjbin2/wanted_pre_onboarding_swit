import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Messenger from './pages/Messenger/Messenger';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
