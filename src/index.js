import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from "./components/ErrorPage";
import PersonalPage from "./components/PersonalPage/PersonalPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/personal",
        element: <PersonalPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
