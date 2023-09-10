import { useEffect, useState } from "react";
import { mFetch } from "../Utils/mockFetch"
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> { //esto se ejecuta como secundario y se ejecuta después del render
    mFetch()
    .then(respuesta => setProduct(respuesta))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])
  
//   console.log(products);

// useEffect(() => {
//     const url = 'https://pokeapi.co/api/v2/ability/?limit=10&offset=0';
//     fetch(url)
//     .then(resp => resp.json())
//     .then(resp => console.log(resp.results))

// }, [])

    return (
      <div className="d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 container g-3 m-3">
            {
              loading ? <h2>Loading...</h2> 
              : 
              <ItemList products = {products} />
            }
        </div>
      </div>
    )
}

export default ItemListContainer