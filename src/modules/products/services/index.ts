import httpsService from 'utils/httpsService'

import { ProductDetailRequest, ProductDetailResponse } from '../models/ProductDetail'
import { ProductListRequest, ProductListResponse } from '../models/ProductList'

export const ProductsServices = {
  getProductList: async (params: ProductListRequest) =>
    await httpsService
      .get<ProductListResponse>('/products/v2/list', {
        params,
      })
      .then((res) => res.data),

  getProductDetail: async (params: ProductDetailRequest) =>
    await httpsService
      .get<ProductDetailResponse>('/products/v3/detail', {
        params,
      })
      .then((res) => res),
}
