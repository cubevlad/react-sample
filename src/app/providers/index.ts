import { composeProviders } from '@shared/utils'

import { WithBrowserRouter } from './browserRouter'
import { WithQueryClientProvider } from './queryClient'

const AppProvider = composeProviders([WithQueryClientProvider, WithBrowserRouter])

export { AppProvider }
