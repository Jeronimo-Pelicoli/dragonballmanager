import React from 'react';
import { Provider } from 'react-redux';
import Action from '../components/Action/Action';
import Balls from '../components/Balls/Balls';
import store from '../store/store';

function Manager() {
  return (
    <div>
        <Provider store={ store }>
          <Action />
          <Balls />
        </Provider>
    </div>
  );
}

export default Manager;