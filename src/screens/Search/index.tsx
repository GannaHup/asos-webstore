/* eslint-disable @typescript-eslint/no-floating-promises */
import { Loading, ProductCard, Spinner } from 'components'
import { useQueryParams } from 'hooks/useQueryParams'
import { useInfiniteProductList } from 'modules/products/hooks'
import { useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './search.module.scss'

const Search = () => {
  const query = useQueryParams()
  const history = useHistory()
  const keyword = query.get('keyword')
  const { data, isLoading, isFetchingNextPage, fetchNextPage } = useInfiniteProductList({
    q: keyword || '',
    offset: 0,
  })
  const products = useMemo(() => data?.pages.flatMap((notif) => notif.products || []), [data])

  const handleSeeDetail = (id: number) => {
    history.push(`product/${id}`)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight

      if (scrollHeight - scrollTop === clientHeight) {
        fetchNextPage()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (isLoading) return <Loading />

  return (
    <div className={styles.container}>
      {keyword && <div className={styles.textSearch}>{`Search results for "${keyword}"`}</div>}

      <div className={styles.content}>
        {products?.map((product) => {
          return (
            <ProductCard
              data={product}
              key={product.id}
              onClick={() => handleSeeDetail(product.id)}
            />
          )
        })}
      </div>
      {isFetchingNextPage && (
        <div className='flex justify-center py-2'>
          <Spinner />
        </div>
      )}
    </div>
  )
}

export default Search
