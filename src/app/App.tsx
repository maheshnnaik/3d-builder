import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ProjectBrowser } from './ProjectBrowser';
import { EditorPage } from './EditorPage';

const router = createBrowserRouter([
  { path: '/', element: <ProjectBrowser /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}
