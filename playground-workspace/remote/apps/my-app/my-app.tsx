import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function MyApp() {
    //   return <h1>Hello World!</h1>;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello World!</h1>}></Route>
                <Route path="/blog/*" element={<h1>Blog page!</h1>} />
            </Routes>
        </BrowserRouter>
    );
}