import React from 'react';
import ReactDOM from 'react-dom/client';
// import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {createHashRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from "./components/ErrorPage";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import CVPage from "./components/CVPage/CVPage";

// const path_var = process.env.REACT_APP_FOR_PATH;
// const path_var = 'portfolio'
const path_var = '/portfolio'
// const path_var = ''

// const router = createBrowserRouter([
const router = createHashRouter([
    {
        path: path_var + "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: path_var + "/personal",
        element: <PersonalPage/>
    },
    {
        path: path_var + "/cv",
        element: <CVPage/>
    },
    {
        path: path_var + "/personal",
        element: <PersonalPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
