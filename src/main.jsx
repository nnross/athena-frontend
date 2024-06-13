import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import About from './pages/about';

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
    }]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);