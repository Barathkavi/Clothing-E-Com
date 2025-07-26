import React from 'react'
import './Breadcurms.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcurms = (props) => {
    const {product} = props;
  return (
    <div className='breadcurms'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcurms