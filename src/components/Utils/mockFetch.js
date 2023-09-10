const products = [
  {id: 1, name: 'Producto1', price: 1000, stock: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vitae tortor non rutrum.', imageUrl: '../../public/Auriculares.png'},
  {id: 2, name: 'Producto2', price: 2000, stock: 20, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vitae tortor non rutrum.', imageUrl: '../../public/Mouse.png'},
  {id: 3, name: 'Producto3', price: 3000, stock: 10, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vitae tortor non rutrum.', imageUrl: '../../public/Teclado.png'},
  {id: 4, name: 'Producto4', price: 4000, stock: 8, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vitae tortor non rutrum.', imageUrl: '../../public/Monitor.png'},
  {id: 5, name: 'Producto5', price: 5000, stock: 15, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur vitae tortor non rutrum.', imageUrl: '../../public/Silla.png'}
]
// el export se puede usar muchas veces mientras que el export default una sola vez
export const mFetch = (pid) => new Promise ((res, rej) => {
  // acciones
  setTimeout(() => {
    res(pid ? products.find(product => product.id === pid) : products) 
  }, 2000);

})
