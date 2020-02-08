import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import { SvgSprite } from '../SvgSprite/SvgSprite';
import { Logo } from '../Logo/Logo';
import { Form } from '../Form/Form';
import { MessagesList } from '../MessagesList/MessagesList';
import { configureStore } from '../../store/store';
import './App.scss';

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>

      <div className="app">
        <SvgSprite />
        <main className="app__container">
          <Logo />
          <Form />
          <MessagesList />
        </main>
      </div>

    </I18nextProvider>
  </Provider>
);
