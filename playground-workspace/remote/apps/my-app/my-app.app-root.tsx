import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { MyApp } from './my-app';
import '@learnbit/styling.config.tailwind/globals.tailwind.css';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <MyApp />
  </BrowserRouter>
);
