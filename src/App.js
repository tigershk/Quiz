import React, { Component } from 'react';

import { MyProvider } from './context'
import { Questions } from './Questions'
import { Score } from './Score'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Score />
          <Questions />
        </div>
      </MyProvider>
    );
  }
}


export default App;