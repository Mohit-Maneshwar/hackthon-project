import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initLenis } from './utils/lenis';

const Root = () => {
  useEffect(() => {
    initLenis();
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
