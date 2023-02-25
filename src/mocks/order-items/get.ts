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
      label: '�R�[�q�[',
      price: 480,
      type: OrderList.Coffee,
    },
    {
      id: 1,
      label: '�g��',
      price: 280,
      type: OrderList.Tea,
    },
    {
      id: 2,
      label: '�~���N',
      price: 180,
      type: OrderList.Milk,
    },
    {
      id: 3,
      label: '�R�[���[',
      price: 190,
      type: OrderList.Coke,
    },
    {
      id: 4,
      label: '�r�[��',
      price: 580,
      type: OrderList.Beer,
    },
  ]

  return res(ctx.status(200), ctx.json(items))
}

export default getOrderItems
