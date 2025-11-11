import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Q1 from './TestQuestions/Q1';
//Q2 is in wwwroot/D3.html
import Q3 from './TestQuestions/Q3';
import Q4 from './TestQuestions/Q4';
import Q5 from './TestQuestions/Q5';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="/TestQuestions/Q1" element={<Q1 title="React Q1 Done" />} />
                    <Route path="/TestQuestions/Q3" element={<Q3 />} />
                    <Route path="/TestQuestions/Q4" element={<Q4 />} />
                    <Route path="/TestQuestions/Q5" element={<Q5 />} />
                    <Route path="" element={<Home />} />
                    <Route path="*" element={<Home />} />
                    <Route path="/TestQuestions/Q4/:categoryId" element={<Q4 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
