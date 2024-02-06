import styles from  './Card.module.scss'
import Axios from 'axios'
import React from 'react'

function Card({image, name, price, onPlus, obj, itemsCart, setItemsCart}){

  const [isAdded, setIsAdded] = React.useState(false) // Добавить в корзину
  const [isFavorite, setIsFavorite] = React.useState(false) // Добавить в избранное
  
  const onClickAdded = () => {
    if (isAdded == false && itemsCart.includes(obj) == false){
      Axios.post('https://655e7c6d879575426b43950e.mockapi.io/cart', obj) // Добавим на сервер
      onPlus(obj) // Добавим в корзину
    } else {
      itemsCart.splice(itemsCart.indexOf(obj), 1) // Удалим из корзины
    }
    setIsAdded(!isAdded)
  }
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
  }
  
    return(
        <div className={styles.card}>
          <div className={styles.favorite}><img src={isFavorite ? '/img/liked.svg' : '/img/heart.svg'} onClick={onClickFavorite}/></div>
          <div className='d-flex flex-column'>  
          <img width="133" height="112" src={image}/>
          <p>{name}</p>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            <img className={styles.plus} src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} onClick={onClickAdded}/>
          </div>
          </div>
        </div>
    )
}

export default Card