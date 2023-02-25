import { rest } from 'msw'
import getUsers from 'mocks/order-items/get'

const handlers = [rest.get('mocks/order-items/', getUsers)]

export default handlers
