import React from "react";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/global.css';
import { WrappedApp } from "./components/App/WrappedApp";

const container = document.getElementById('app');

const root = createRoot(container);

root.render(<WrappedApp />);