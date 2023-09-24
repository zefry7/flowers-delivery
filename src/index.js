import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import "./css/style.css"
import Page from './js/HeaderFooter/Page';
import Main from './js/Main-page/Main';


function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Page />}>
              <Route index element={<Main/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <App/>
);

