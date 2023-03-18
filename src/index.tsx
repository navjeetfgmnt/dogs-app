import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dogs } from './screens/dogs/dogs';
import { Dog } from './screens/dog/dog';
import ErrorPage from './screens/error-page/error-page';
import { AxiosInstance } from 'axios';
import axiosInstance from './services/axios-instance';

const container = document.getElementById('root')!;
const root = createRoot(container);

export default axiosInstance as AxiosInstance;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dogs />,
      },
      {
        path: '/dog-breeds/:breed',
        element: <Dog />,
        children: [
          {
            path: '/dog-breeds/:breed/:subBreed',
            element: <Dog />,
          },
        ],
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
