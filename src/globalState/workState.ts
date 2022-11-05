import { createContext, useCallback, useState } from 'react'
import type { Work } from '../../src/work/technicalEmployee'

type WorkState = {
  state: Work
  setWork: (work: Work) => void
}

const defaultState: WorkState = {
  state: '',
  setWork: () => ({}),
}

export const WorkState = createContext<WorkState>(defaultState)

export const useWorkState = (): WorkState => {
  const [state, setWorkState] = useState<Work>('')
  const setWork = useCallback((state: Work) => setWorkState(state), [])
  return {
    state,
    setWork,
  }
}
