import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "./assets/scss/main.scss";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
            <App />
      </BrowserRouter>
  </StrictMode>,
)
