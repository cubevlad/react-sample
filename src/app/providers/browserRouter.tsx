import { BrowserRouter } from 'react-router-dom'

const WithBrowserRouter = ({ children }: { children?: React.ReactNode }) => {
  return <BrowserRouter> {children} </BrowserRouter>
}

export { WithBrowserRouter }
