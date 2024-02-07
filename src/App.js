import React from 'react'
import Axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import Favorite from "./pages/Favorite"

function App() {
  const [cartOpened, setCartOpened] = React.useState(false) // Открытие корзины
  const [items, setItems] = React.useState([]) // Карточки на странице
  const [favorite, setFavorite] = React.useState([])
  const [itemsCart, setItemsCart] = React.useState([]) // Товары из корзины
  const [search, setSearch] = React.useState('') // Поиск - фильтрация!
  const [fullPrice, setFullPrice] = React.useState(0) // Сумма выбранных
  
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
      <Routes>
        <Route path='/' element={<Home
          search={search}
          onChangeSearchInput={onChangeSearchInput}
          items={items}
          itemsCart={itemsCart}
          setItemsCart={setItemsCart}
          favorite={favorite}
          setFavorite={setFavorite}
        />}/>
        <Route path='/favorite' element={<Favorite
          favorite={favorite}
          itemsCart={itemsCart}
          setItemsCart={setItemsCart}
          setFavorite={setFavorite}
        />}/>
      </Routes>
    </div>
  )
}

export default App;
