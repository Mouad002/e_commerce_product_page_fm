import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage';

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route index element={<MainPage />} />
    )
  );
  return <RouterProvider router={myRouter} />;
};

export default App;
