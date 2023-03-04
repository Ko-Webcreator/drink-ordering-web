import { rest } from 'msw'
import getOrderItems from 'mocks/order-items/get'

const handlers = [rest.get('mocks/order-items/', getOrderItems)]

export default handlers
