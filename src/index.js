import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode : 개발모드일때만 실행됨
  // (useStare,useEffect가 잘 실행되고 있는 감시해줌)
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
