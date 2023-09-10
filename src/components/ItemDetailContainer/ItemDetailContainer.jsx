import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { mFetch } from '../Utils/mockFetch'


const ItemDetailContainer = () => {
  const[product, setProduct] = useState({});
  const {pid} = useParams();
  
  useEffect(() => {
    mFetch(Number(pid))
    .then(resp => setProduct(resp))
    .catch(err=>console.log(err))
  }, [])

  return (
    <>
      <ItemDetail product = {product}/>
    </>
  )
}

export default ItemDetailContainer