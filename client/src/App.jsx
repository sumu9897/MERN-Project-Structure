import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>



            </Routes>
        </BrowserRouter>
    );
};

export default App;