import React from 'react'
import Axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  const [cartOpened, setCartOpened] = React.useState(false) // Открытие корзины
  const [items, setItems] = React.useState([]) // Карточки на странице
  const [itemsCart, setItemsCart] = React.useState([]) // Товары из корзины
  const [search, setSearch] = React.useState('') // Поиск - фильтрация!
  const [fullPrice, setFullPrice] = React.useState(0)
  React.useEffect(() => {
    Axios.get('https://655e7c6d879575426b43950e.mockapi.io/items').then(res => {setItems(res.data)}) // БД всех карточек на странице
    Axios.get('https://655e7c6d879575426b43950e.mockapi.io/cart').then(res => {setItemsCart(res.data)}) // БД добавленных товаров в корзину
  }, [])
  
  const onChangeSearchInput = (event) => {
    setSearch(event.target.value)
  }

  return(
    <div className='wrapper clear'>
      {cartOpened && <Drawer setItemsCart={setItemsCart} itemsCart={itemsCart} cartClose={() => {setCartOpened(false)}}/>}
      <Header fullPrice={fullPrice} cartOpen={() => {setCartOpened(true)}}/>
      <div className='content'>
        <div className='d-flex align-center justify-between p-10'>
        <h1 className='ml-15'>{search ? `Поиск по запросу: "${search}"` : 'Все кроссовки'}</h1>
        <div className='search-box d-flex'>
          <img src='/img/search.svg'/>
          <input placeholder='Поиск...' onChange={onChangeSearchInput}></input>
        </div>
        </div>
        <div className="cards d-flex flex-wrap p-15">
          {items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((val) => <Card
            price={val.price}
            name={val.name}
            image={val.image}
            obj={val}
            itemsCart={itemsCart}
            onPlus={(obj) => {setItemsCart((prev) => [...prev, obj])}}
            />)}
        </div>
      </div>
    </div>
  )
}

export default App;
