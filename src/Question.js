import React, { Component } from 'react';
import { MyContext } from './hooks'


export class Question extends Component {

  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <>
              <p>Fifty: {String(context.fifty)}</p>
              <p>Audience: {String(context.audience)}</p>
              <p>Friend: {String(context.friend)}</p>
              <p>SCORE: {String(context.money)}</p>

              <button onClick={context.useFifty}>50:50</button>
              <button onClick={context.useAudience}>Audience</button>
              <button onClick={context.useFriend}>Friend</button>
              <button onClick={context.useMoney}>Increase Score</button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}
