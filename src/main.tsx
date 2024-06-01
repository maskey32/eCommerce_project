import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import './index.css';
import BaseRoute from './routes/BaseRoute.tsx';
import { store } from './store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<BaseRoute />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
