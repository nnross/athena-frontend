import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import About from './pages/about';
import Signup from './pages/signup';
import Login from './pages/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "login",
      element: <Login />,
    }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);