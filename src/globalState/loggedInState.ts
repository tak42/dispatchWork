import { createContext, useCallback, useState } from 'react'

type LoggedIn = true | false
type LoggedInState = {
  state: LoggedIn
  setLoggedIn: (isLoggedIn: LoggedIn) => void
}

const defaultState: LoggedInState = {
  state: false,
  setLoggedIn: () => {},
}

export const loggedInState = createContext<LoggedInState>(defaultState)

export const useLoggedInState = (): LoggedInState => {
  const [state, setLoggedInState] = useState(false)
  const setLoggedIn = useCallback((isLoggedIn: LoggedIn) => setLoggedInState(isLoggedIn), [])
  return {
    state,
    setLoggedIn,
  }
}
