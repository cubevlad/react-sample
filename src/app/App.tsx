import { Routing } from '@pages'

import { AppProvider } from './providers'

export const App = () => {
  return (
    <AppProvider>
      <Routing />
    </AppProvider>
  )
}
