import { DataSource } from 'typeorm'

import UserToken from '../../../modules/users/infra/typeorm/entities/UserToken'
import Order from '../../../modules/orders/infra/typeorm/entities/Order'
import OrdersProducts from '../../../modules/orders/infra/typeorm/entities/OrdersProducts'
import Product from '../../../modules/products/infra/typeorm/entities/Product'
import User from '../../../modules/users/infra/typeorm/entities/User'
import Customer from '../../../modules/customers/infra/typeorm/entities/Customer'

import { CreateCustomers1655715117337 } from './migrations/1655715117337-CreateCustomers'
import { CreateOrders1655732178529 } from './migrations/1655732178529-CreateOrders'
import { CreateOrdersProducts1655758517669 } from './migrations/1655758517669-CreateOrdersProducts'
import { AddCustomerIdToOrders1655732401156 } from './migrations/1655732401156-AddCustomerIdToOrders'
import { AddProductIdToOrdersProducts1655758884928 } from './migrations/1655758884928-AddProductIdToOrdersProducts'
import { CreateUsers1654966087355 } from './migrations/1654966087355-CreateUsers'
import { CreateProducts1654555188550 } from './migrations/1654555188550-CreateProducts'
import { AddOrderIdToOrdersProducts1655758698944 } from './migrations/1655758698944-AddOrderIdToOrdersProducts'
import { CreateUserTokens1655147423184 } from './migrations/1655147423184-CreateUserTokens'

export const dataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: process.env.DATABASE_PORT as number | undefined,
  username: process.env.DATABASE_USER as string,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateCustomers1655715117337,
    CreateOrders1655732178529,
    CreateOrdersProducts1655758517669,
    AddCustomerIdToOrders1655732401156,
    AddProductIdToOrdersProducts1655758884928,
    CreateUsers1654966087355,
    CreateProducts1654555188550,
    AddOrderIdToOrdersProducts1655758698944,
    CreateUserTokens1655147423184,
  ],
})
