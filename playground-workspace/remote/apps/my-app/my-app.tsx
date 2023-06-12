import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Heading } from '@ashwanth1109/remote.ui.heading';

export function MyApp() {
  return (
    <div className="bg-black-primary">
      <Routes>
        <Route path="/" element={<Heading>Hello World!</Heading>} />
        <Route path="/blog/*" element={<Heading>Blog page!</Heading>} />
      </Routes>
    </div>
  );
}
