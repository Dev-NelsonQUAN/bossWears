import React from 'react'
import "./productadd.css"
import cancel from '../../../assets/cancel.svg'

const ProductModal = () => {
  return (
    <div className='ProductModal'>
        <div className='product-modal-content'>
            <div className='product-modal-header'>
                Successful
                <div className='cancel-box'>
                    <img src={cancel} alt="" />
                </div>
            </div>
            <div className='product-modal-check'></div>
            <div className='product-modal-message'>Product Added Successfully!</div>
        </div>
    </div>
  )
}

export default ProductModal