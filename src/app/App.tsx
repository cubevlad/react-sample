import { Routing } from '@pages/index'

import { AppProvider } from './providers'

export const App = () => {
  return (
    <AppProvider>
      <Routing />
    </AppProvider>
  )
}
