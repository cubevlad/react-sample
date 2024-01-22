type ProvidersProps = (({ children }: { children?: React.ReactNode }) => JSX.Element)[]

const composeProviders = (providers: ProvidersProps) =>
  providers.reduce(
    (Provider, Component) =>
      function Child({ children }) {
        return (
          <Provider>
            <Component>{children}</Component>
          </Provider>
        )
      }
  )

export { composeProviders }
