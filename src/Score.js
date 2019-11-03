import React from 'react';
import { MyContext, useMoney } from './hooks'


export const Score = () => {
  const { money } = useMoney();
  return (
    <div className="score">
      You currently have £{money}
      <MyContext.Consumer>
        {(context) => (
          <>
            <p>Fifty: {String(context.fifty)}</p>
            <p>Audience: {String(context.audience)}</p>
            <p>Friend: {String(context.friend)}</p>

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
