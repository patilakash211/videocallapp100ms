import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {HMSRoomProvider} from "@100mslive/react-sdk"
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HMSRoomProvider>
      <App />
    </HMSRoomProvider>
  </StrictMode>
);


