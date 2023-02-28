import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import React from 'react'
import ButtonList from 'pageComponents/top/ButtonList'
import { store } from 'store'

describe('Render ButtonList', () => {
  test('get mocks/order-items/', async () => {
    render(
      <Provider store={store}>
        <ButtonList />
      </Provider>
    )

    expect(await screen.findByText('コーヒー')).toBeInTheDocument()
    expect(await screen.findByText('紅茶')).toBeInTheDocument()
    expect(await screen.findByText('ミルク')).toBeInTheDocument()
    expect(await screen.findByText('コーラー')).toBeInTheDocument()
    expect(await screen.findByText('ビール')).toBeInTheDocument()
  })
})
