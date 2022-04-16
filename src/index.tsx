import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch