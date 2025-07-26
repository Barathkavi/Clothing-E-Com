import React from 'react'
import './RelatedProuducts.css'
import data_prouduct from '../Assets/data'
import Item from '../Item/Item'

const RelatedProuducts = () => {
  return (
    <div className='relatedProuducts'>
        <h1>Related Proudects</h1>
        <hr />
        <div className="relatedProuducts-item">
            {data_prouduct.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProuducts