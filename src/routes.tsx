import React, { FC, version } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

export const Routes: FC = () => (
  <BrowserRouter>
    <Route path="/">
      { /* TODO remove this part of code */ }
      <div className="hello-world__wrapper">
        <h1 className="hello-world__headline">{ `React.js v ${ version }` }</h1>
      </div>
    </Route>
  </BrowserRouter>
);
