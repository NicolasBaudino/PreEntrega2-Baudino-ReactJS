import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  const handleAdd = () => {
    if(counter < stock){
        setCounter(counter+1);
    }
  }
  const handleSubtract = () => {
    if(counter > initial){
      setCounter(counter-1);
  }
  }
  const handleOnAdd = () => {
    onAdd(counter);
  }

  return (
    <>
      <button className="btn btn-outline-dark" onClick={handleAdd}>+ 1</button> 
      <label>
        <strong>{ counter }</strong>
      </label>
      <button className="btn btn-outline-dark" onClick={handleSubtract}>- 1</button>
      <button className="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount