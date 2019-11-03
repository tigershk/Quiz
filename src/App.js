import React, { Component } from 'react';

import { MyProvider } from './hooks'
import { Question } from './Question'
import { Score } from './Score'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Score />
          <Question />
        </div>
      </MyProvider>
    );
  }
}


export default App;