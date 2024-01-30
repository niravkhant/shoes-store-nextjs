import React, { Children } from 'react'
import styles from "./ProductsContainer.module.css"

const ProductsContainer = ({children, className}) => {
  return (
    <div className="container">
        <div className={`${className} ${styles['productContainerMain']}`}>
        {children}
        </div>
    </div>
  )
}

export default ProductsContainer