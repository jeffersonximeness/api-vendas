import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateProductService from '../../../services/CreateProductService'
import DeleteProductService from '../../../services/DeleteProductService'
import ListProductService from '../../../services/ListProductService'
import ShowProductService from '../../../services/ShowProductService'
import UpdateProductService from '../../../services/UpdateProductService'

class ProductsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1
    const limit = request.query.limit ? Number(request.query.page) : 15
    const listProducts = container.resolve(ListProductService)

    const products = await listProducts.execute({ limit, page })

    return response.json(products)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const showProduct = container.resolve(ShowProductService)

    const product = await showProduct.execute({ id })

    return response.json(product)
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body
    const createProduct = container.resolve(CreateProductService)

    const product = await createProduct.execute({ name, price, quantity })

    return response.json(product)
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, price, quantity } = request.body
    const updateProduct = container.resolve(UpdateProductService)

    const product = await updateProduct.execute({ id, name, price, quantity })

    return response.json(product)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deleteProduct = container.resolve(DeleteProductService)

    await deleteProduct.execute({ id })

    return response.json([])
  }
}

export default ProductsController
