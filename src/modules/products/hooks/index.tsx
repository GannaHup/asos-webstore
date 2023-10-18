import { AxiosResponse } from 'axios'
import { useInfiniteQuery, useQuery, UseQueryOptions } from 'react-query'

import { ProductDetailRequest, ProductDetailResponse } from '../models/ProductDetail'
import { ProductListRequest } from '../models/ProductList'
import { ProductsServices } from '../services'

export const useInfiniteProductList = (request: ProductListRequest) =>
  useInfiniteQuery(
    ['infinite-product-list', request],
    async ({ pageParam }) =>
      await ProductsServices.getProductList({
        ...request,
        offset: (pageParam || 0) * 48,
      }),
    {
      getNextPageParam: (data, allPages) => {
        return data.itemCount / 48 > allPages.length ? allPages.length : undefined
      },
    }
  )

export const useProductDetail = (
  request: ProductDetailRequest,
  options?: UseQueryOptions<AxiosResponse<ProductDetailResponse>>
) =>
  useQuery({
    queryKey: ['product-detail', request],
    queryFn: async () => await ProductsServices.getProductDetail({ id: request?.id }),
    ...options,
  })
