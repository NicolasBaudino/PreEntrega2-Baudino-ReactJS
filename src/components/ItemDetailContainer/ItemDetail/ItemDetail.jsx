import React from 'react'
import ItemCount from '../../Counter/ItemCount';

const ItemDetail = ({product}) => {
  
  const onAdd = (count) => {
    console.log('productos seleccionados : ', count);
  }

  return (
    <>
      <div className='row'>
        <h2>Vista detalle</h2>
        <div className='col'>
          <img src={product.imageUrl} className='w-25' alt="imagen producto"/>
          <div>
            <p>Nombre: {product.name}</p>
            <p>Descripción: {product.description}</p>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
          </div>
        </div>
        <div className='col'>
          <ItemCount initial = {1} stock={5} onAdd={onAdd} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail