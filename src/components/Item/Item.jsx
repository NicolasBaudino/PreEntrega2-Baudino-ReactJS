import React from 'react'

const Item = ({product}) => {
  return (
    <>
      <div className='col'>
        <div className="card">
            <div className="card-body">
                <img className="w-100 card-img-top" src={product.imageUrl} alt="Imagen producto" />
                <p>{product.name}</p>
                <p>Descripcion: {product.description}</p>
                <p>Precio: {product.price}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-dark w-100">Detalle</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Item