import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import StreamList from 'components/streams/StreamList';
import StreamCreate from 'components/streams/StreamCreate';
import StreamShow from 'components/streams/StreamShow';
import StreamEdit from 'components/streams/StreamEdit';
import StreamDelete from 'components/streams/StreamDelete';

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<StreamList />} />
      <Route path="/streams/new" element={<StreamCreate />} />
      <Route path="/streams/show" element={<StreamShow />} />
      <Route path="/streams/edit" element={<StreamEdit />} />
      <Route path="/streams/delete" element={<StreamDelete />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
