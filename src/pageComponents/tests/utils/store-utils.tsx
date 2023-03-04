import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { SWRConfig } from 'swr'
import { Provider } from 'react-redux'
import { store } from 'store'

const renderWithStore = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Provider store={store}>{children}</Provider>
    </SWRConfig>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: renderWithStore, ...options })

export * from '@testing-library/react'
export { customRender as render }
