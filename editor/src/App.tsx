import './App.css';
import { Home } from './routes/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/Tabs", element: <Home /> }
      ],
    },
  ], {
    // basename: "/static/editor"
  });
  return (
    <RouterProvider router={router} />
  );
}

export default App;
