import React from 'react';
import ReactDOM from 'react-dom/client';
// import {createBrowserRouter, RouterProvider,} from "react-router-dom";
// import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorPage from "./components/ErrorPage";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import CVPage from "./components/CVPage/CVPage";
// import ProjectPage from "./components/ProjectsPage/ProjectPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ProjectPageTest from "./components/ProjectsPage/ProjectPageTest";
import FinancialCalculator from "./components/ProjectsPage/assets/projects/FinancialCalculator";

// const path_var = process.env.REACT_APP_FOR_PATH;
// const path_var = 'portfolio'
// const path_var = '/portfolio'
const path_var = ''

// const router = createBrowserRouter([
// // const router = ([
//     {
//         path: path_var + "/",
//         element: <App/>,
//         errorElement: <ErrorPage/>,
//     },
//     {
//         path: path_var + "/personal",
//         element: <PersonalPage/>
//     },
//     {
//         path: path_var + "/experience",
//         element: <CVPage/>
//     },
//     {
//         path: path_var + "/projects",
//         element: <ProjectPage/>
//     },
//     {
//         path: path_var + "/contact",
//         element: <ContactPage/>
//     },
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<RouterProvider router={router}/>*/}
        <Router>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/personal" element={<PersonalPage />}/>
                <Route path="/experience" element={<CVPage />}/>
                {/*<Route path="/projects" element={<ProjectPage />}/>*/}
                <Route path="/projects" element={<ProjectPageTest />}/>
                <Route path="/projects/financial_calculator" element={<FinancialCalculator />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </Router>
    </React.StrictMode>
);
