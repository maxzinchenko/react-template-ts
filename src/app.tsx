import React, { FC } from 'react';

import './style.css';

import { ErrorBoundary } from './error';
import { Routes } from './routes';

export const App: FC = () => (
  <ErrorBoundary>
    <Routes/>
  </ErrorBoundary>
);
