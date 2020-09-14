import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import { getCards } from './data.js';

const history = createBrowserHistory();

const state = {
  cards: getCards(),
};

const onCardEdit = (cardId, cardIsDone) => {
  const foundCard = state.cards.find(card => {
    return card.id === cardId;
  });

  let cards = state.cards;
  cards = [...cards, {...foundCard, isDone: cardIsDone}];
};

ReactDOM.render(
  <Router history={history}>
      <App reRender={reRender} cards={state.cards} onCardEdit={onCardEdit} />
  </Router>
  , document.getElementById('root'));
