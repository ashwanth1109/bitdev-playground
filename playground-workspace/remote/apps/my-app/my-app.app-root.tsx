import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { MyApp } from "./my-app";

const container = document.getElementById('root');
const root = createRoot(container!);
// root.render(<MyApp />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
root.render(
    <BrowserRouter>
        <MyApp />
    </BrowserRouter>
);