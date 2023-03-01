import { Provider } from 'react-redux'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import ButtonList from 'pageComponents/top/ButtonList'
import { store } from 'store'
import { server } from 'mocks/server'
import { rest } from 'msw'
import { SWRConfig } from 'swr'

describe('Render ButtonList', () => {
  test('get mocks/order-items/', async () => {
    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Provider store={store}>
          <ButtonList />
        </Provider>
      </SWRConfig>
    )

    expect(await screen.findByText('コーヒー')).toBeInTheDocument()
    expect(await screen.findByText('紅茶')).toBeInTheDocument()
    expect(await screen.findByText('ミルク')).toBeInTheDocument()
    expect(await screen.findByText('コーラー')).toBeInTheDocument()
    expect(await screen.findByText('ビール')).toBeInTheDocument()
  })

  test('get error mocks/order-items/', async () => {
    server.use(
      rest.get('mocks/order-items/', (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )

    render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <Provider store={store}>
          <ButtonList />
        </Provider>
      </SWRConfig>
    )

    await waitFor(() => screen.queryByText('コーヒー'))

    screen.debug()
    expect(screen.queryByText('コーヒー')).toBeNull()
  })
})
