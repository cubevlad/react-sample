import { Suspense, lazy } from 'react'

import { Typography } from '@mui/material'
import { Route, Routes as ReactRoutes } from 'react-router-dom'

import type { Routes } from './lib'

const ExamplePage1 = lazy(() =>
  import('./PageExample1').then((mod) => ({
    default: mod.ExamplePage1,
  }))
)

const ExamplePage2 = lazy(() =>
  import('./PageExample2').then((mod) => ({
    default: mod.ExamplePage2,
  }))
)

const routes: Routes = [
  {
    to: '/',
    element: <Typography> Hello </Typography>,
    caption: 'Main',
  },
  {
    to: '/ExamplePage1',
    element: <ExamplePage1 />,
    caption: 'ExamplePage1',
  },
  {
    to: '/ExamplePage2',
    element: <ExamplePage2 />,
    caption: 'ExamplePage2',
  },
]

const Routing = () => {
  return (
    <Suspense fallback='Loading...'>
      <ReactRoutes>
        {routes.map(({ caption, element, to }) => (
          <Route key={caption} element={element} path={to} />
        ))}
      </ReactRoutes>
    </Suspense>
  )
}

export { Routing }
