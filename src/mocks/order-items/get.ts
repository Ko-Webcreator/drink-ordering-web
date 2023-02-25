import { ResponseResolver, MockedRequest, restContext } from 'msw'
import { OrderItemsReq } from 'types/api/orderItems'
import { OrderList } from 'types/order'

const getOrderItems: ResponseResolver<MockedRequest, typeof restContext> = (
  req,
  res,
  ctx
) => {
  const items: OrderItemsReq[] = [
    {
      id: 0,
      label: 'コーヒー',
      price: 480,
      type: OrderList.Coffee,
    },
    {
      id: 1,
      label: '紅茶',
      price: 280,
      type: OrderList.Tea,
    },
    {
      id: 2,
      label: 'ミルク',
      price: 180,
      type: OrderList.Milk,
    },
    {
      id: 3,
      label: 'コーラー',
      price: 190,
      type: OrderList.Coke,
    },
    {
      id: 4,
      label: 'ビール',
      price: 580,
      type: OrderList.Beer,
    },
  ]

  return res(ctx.status(200), ctx.json(items))
}

export default getOrderItems
