import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createContext } from 'vm';

const Child: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div style={style}>Child prop</div>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type ProductContextType = {
  selectedProductId: number;
};

export const ProductContext = createContext<ProductContextType | null>(null);

root.render(
  <React.StrictMode>
    <ProductContext.Provider value={{ selectedProductId: 1 }}>
      <App />
    </ProductContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <App onClick={() => alert(123)} test={<div>Hello World!</div>}>
  <Child style={{ color: 'green' }} />
</App> */}
