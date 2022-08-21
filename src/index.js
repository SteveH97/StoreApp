import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Store from './Store';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <Store />
    </Context>
  </React.StrictMode>
);

