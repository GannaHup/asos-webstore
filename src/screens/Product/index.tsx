import { Badge, Icon, Loading } from 'components'
import { useProductDetail } from 'modules/products/hooks'
import { ProductDetailResponse, Variant } from 'modules/products/models/ProductDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './product.module.scss'

const Product = () => {
  const [currentImage, setCurrentImage] = useState('')
  const query = useParams<{ id: string }>()
  const { data, isLoading } = useProductDetail({ id: query.id })
  const productDetailData = (data?.data || {}) as ProductDetailResponse
  const images = productDetailData?.media?.images

  const textBadge = (variant: Variant) => {
    if (variant.colour && !variant.brandSize) return variant.colour
    if (!variant.colour && variant.brandSize) return variant.brandSize
    return `${variant.colour} - ${variant.brandSize}`
  }

  useEffect(() => {
    if (images && images.length > 0) {
      setCurrentImage(`https://${images?.[0].url}`)
    }
  }, [images])

  if (isLoading) return <Loading />

  return (
    <div className={styles.container}>
      <div className={styles.galleryImage}>
        <div className={styles.thumbnail}>
          <img
            src={currentImage || ''}
            alt={productDetailData.name || ''}
            className={styles.imageProduct}
          />
        </div>
        <div className={styles.listImage}>
          {images.map((image, idx) => {
            const isActive = currentImage.replace('https://', '') === image.url
            return (
              <div
                key={idx}
                className={styles.itemImage}
                onClick={() => setCurrentImage(`https://${image.url}`)}
              >
                <img
                  src={`https://${image.url}`}
                  alt={image.type}
                  className={[styles.item, isActive && styles.active].join(' ')}
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.infoProduct}>
        <h2 className={styles.titleProduct}>{productDetailData.name}</h2>
        <div className={styles.brandName}>
          <Icon name='tag' width={20} height={20} />
          <span>{productDetailData.brand.name}</span>
        </div>
        <div className={styles.priceProduct}>
          {productDetailData.price.previous.value &&
            productDetailData.price.previous.value !== productDetailData.price.current.value && (
              <span className={styles.oldPriceProduct}>
                {productDetailData.price.previous.text}
              </span>
            )}
          <span className={styles.currentPriceProduct}>{productDetailData.price.current.text}</span>
        </div>

        <div className={styles.wrapperVariants}>
          <span>Variants:</span>
          <div className={styles.listVariant}>
            {productDetailData.variants?.map((variant: Variant, idx: number) => {
              return <Badge text={textBadge(variant)} key={idx} />
            })}
          </div>
        </div>
        <div className={styles.infoField}>
          <span className={styles.titleInfo}>Descriptions: </span>
          <div
            dangerouslySetInnerHTML={{ __html: productDetailData.info.aboutMe || '' }}
            className={styles.aboutMeProduct}
          />
          <div
            dangerouslySetInnerHTML={{ __html: productDetailData.description || '' }}
            className={styles.descInfo}
          />
        </div>
      </div>
    </div>
  )
}

export default Product
