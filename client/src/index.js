import React from 'react';
import { createRoot } from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
