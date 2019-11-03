import React, { createContext, useState, useContext } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [fifty, setFifty] = useState(false)
  const [audience, setAudience] = useState(false)
  const [friend, setFriend] = useState(false)
  const [money, setMoney] = useState(0)

  const moneyLadder = [0, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000]

  return (
    <MyContext.Provider value={{
      fifty,
      useFifty: () => setFifty(true),

      audience,
      useAudience: () => setAudience(true),

      friend,
      useFriend: () => setFriend(true),

      money,
      useMoney: () => setMoney(moneyLadder[(moneyLadder.indexOf(money) + 1)])
    }
    }>
      {children}
    </MyContext.Provider>
  )
}

