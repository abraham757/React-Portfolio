import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app.jsx';

import About from './src/components/pages/about';
import Home from './src/components/pages/home';
import Portfolio from './src/components/pages/portfolio';
import Contact from './src/components/pages/contact';
import Resume from './src/components/pages/resume';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contact',
        element: <Contact />
      },    
      {
        path: 'resume',
        element: <Resume />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);