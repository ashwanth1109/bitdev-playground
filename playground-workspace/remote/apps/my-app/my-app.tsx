import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function MyApp() {
    //   return <h1>Hello World!</h1>;
    return (
        <Routes>
            <Route path="/" element={<h1>Hello World!</h1>} />
            <Route path="/blog/*" element={<h1>Blog page!</h1>} />
        </Routes>
    );
}
