import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from './App';
import './styles.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);