import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcurms from '../Components/Breadcrums/Breadcurms';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProuducts from '../Components/RelatedProuducts/RelatedProuducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId) )
  return (
    <div>
      <Breadcurms product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProuducts/>
    </div>
  )
}

export default Product