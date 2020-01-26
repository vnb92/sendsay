import React from 'react';
import { Provider } from 'react-redux'
import { Logo } from '../Logo/Logo'
import { Form } from '../Form/Form'
import { MessagesList } from '../MessagesList/MessagesList'
import { initApi } from '../../api/api';
import { configureStore } from '../../store/store';
import './App.scss'

initApi();

const store = configureStore()

export const App = () => (
  <Provider store={store}>
    <div className="app">
      <main className="app__container">
        <Logo />
        <Form />
        <MessagesList />
      </main>
    </div>
  </Provider>
);
