import './App.css';
import { Home } from './routes/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './routes/Root';
import { TabsDemo } from './routes/TabsDemo';
import { FormPage } from './routes/FormPage';
import { Profiles } from './routes/Profiles';
import { PaginatedTable } from './components/table/PaginatedTable';
import { TableWithFormElements } from './components/table/TableWithFormElements';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "tabs*",
          element: <TabsDemo />,
          children: [
            { path: "home", index:true, element: <Profiles /> },
            { path: "add_profile", element: <FormPage /> },
            { path: "profiles", element: <TableWithFormElements />}
          ]
        }
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
