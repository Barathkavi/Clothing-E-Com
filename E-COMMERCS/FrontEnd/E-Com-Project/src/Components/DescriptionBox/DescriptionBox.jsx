import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
        <div className="descriptionBox-navigator">
            <div className="descriptionBox-nav-box">Description</div>
            <div className="descriptionBox-nav-box fade">Review (122)</div>
        </div>
        <div className="descriptionBox-descrition">
            <p>E-commerce, or electronic commerce, refers to the buying and selling of goods or services using the internet. It encompasses all online transactions, from browsing products to completing the purchase and delivery. E-commerce allows businesses to reach a global audience and provides consumers with convenient, 24/7 access to a vast array of products and services. </p>
        </div>        
    </div>
  )
}

export default DescriptionBox