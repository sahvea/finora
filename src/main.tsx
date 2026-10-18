import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import '@/index.css';

import { router } from '@/app/router';
import { store } from '@/app/store';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Не найден #root в index.html');
}

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
