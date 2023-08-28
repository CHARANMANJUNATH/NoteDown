import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./components/App";


const root = createRoot(document.getElementById("root")); // Use createRoot directly
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
