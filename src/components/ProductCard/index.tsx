import { Product } from 'modules/products/models/ProductList'
import React from 'react'

import styles from './productCard.module.scss'

interface CardProps {
  data: Product
  onClick?: () => void
}

export const ProductCard: React.FC<CardProps> = (props) => {
  const { data, onClick } = props
  return (
    <div className={styles.card} onClick={onClick}>
      <img className={styles.imageCard} src={`https://${data.imageUrl}`} alt={data.name || ''} />
      <div className={styles.wrapperInfoCard}>
        <p className={styles.nameCard}>{data.name}</p>
        <div className={styles.infoCard}>
          <div className={styles.infoPrice}>
            {data.price?.previous.text && (
              <span className={styles.oldPrice}>{data.price?.previous?.text}</span>
            )}
            <span className={styles.newPrice}>{data.price?.current?.text}</span>
          </div>
          <span className={styles.brandName}>{data.brandName}</span>
        </div>
      </div>
    </div>
  )
}
