import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Signup from './pages/signup';
import Login from './pages/login';
import Profile from './pages/profile';
import StartingCharacter from './pages/startingCharacter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'signup',
      element: <Signup />,
    },
    {
      path: 'signup/character',
      element: <StartingCharacter />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'profile',
      element: <Profile />,
    }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
