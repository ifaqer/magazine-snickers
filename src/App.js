import React from 'react'
import Axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { Routes, Route, Link } from 'react-router-dom'

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
        <Route path='/' element={
          <div className='content'>
          <div className='d-flex align-center justify-between p-10'>
          <h1 className='ml-20'>{search ? `Поиск по запросу: "${search}"` : 'Все кроссовки'}</h1>
          <div className='search-box d-flex'>
            <img src='/img/search.svg'/>
            <input placeholder='Поиск...' onChange={onChangeSearchInput}></input>
          </div>
          </div>
          <div className="cards d-flex flex-wrap p-15">
            {items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((val, index) => <Card
              key={index}
              price={val.price}
              name={val.name}
              image={val.image}
              obj={val}
              itemsCart={itemsCart}
              setItemsCart={setItemsCart}
              favorite={favorite}
              setFavorite={setFavorite}
              onPlus={(obj) => {setItemsCart((prev) => [...prev, obj])}}
              onNotPlus={(obj)=>{setItemsCart(itemsCart.filter((item)=>item != obj))}}
              />)}
          </div>
        </div>
        }/>
        <Route path='/favorite' element={
          <>
            <h1 className='ml-20'>Мои избранные</h1>
          <div className="cards d-flex flex-wrap p-15">
          {favorite.map((val, index)=><Card
          key={index}
          price={val.price}
          name={val.name}
          image={val.image}
          obj={val}
          itemsCart={itemsCart}
          setItemsCart={setItemsCart}
          favorite={favorite}
          setFavorite={setFavorite}
          onPlus={(obj) => {setItemsCart((prev) => [...prev, obj])}}
          onNotPlus={(obj)=>{setItemsCart(itemsCart.filter((item)=>item != obj))}}
          />)}
          </div>
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App;
