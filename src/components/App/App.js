import React from 'react';
import { Logo } from '../Logo/Logo'
import { Form } from '../Form/Form'
import { MessagesList } from '../MessagesList/MessagesList'
import './App.scss'

export const App = () => (
  <div className="app">
    <main className="app__container">
      <Logo />
      <Form />
      <MessagesList />
    </main>
  </div>
);
