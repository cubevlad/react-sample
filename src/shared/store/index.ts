import { createContext, useContext } from 'react'

import { rootStore } from './root'

type RootStore = typeof rootStore

const StoreContext = createContext<RootStore>(rootStore)

export const useStore = () => useContext(StoreContext)
