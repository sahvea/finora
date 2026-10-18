import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';

import '@fontsource-variable/instrument-sans';
import '@/shared/styles/tokens.css';
import '@/shared/styles/reset.css';
import '@/shared/styles/global.css';

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
