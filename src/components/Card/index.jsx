import styles from  './Card.module.scss'
import Axios from 'axios'
import React from 'react'

function Card({image, name, price, onPlus, onNotPlus, obj, favorite, setFavorite, itemsCart, setItemsCart}){
  const [isAdded, setIsAdded] = React.useState(false) // Состояние добавления в корзину
  const [isFavorite, setIsFavorite] = React.useState(false) // Состояние добавления в избранные

  const onClickAdded = () => {
    if (isAdded == true){
      onNotPlus(obj)
    } else{
      onPlus(obj)
      Axios.post('https://655e7c6d879575426b43950e.mockapi.io/cart', obj)
    }
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    if (isFavorite == true){
      setFavorite(favorite.filter((item)=> item != obj))
    } else{
      setFavorite((prev)=>[...prev, obj])
    }
    setIsFavorite(!isFavorite)
  }
  
    return(
        <div className={styles.card}>
          <div className={styles.favorite}><img src={window.location.href != 'http://localhost:3000/favorite' ? (isFavorite ? '/img/liked.svg' : '/img/heart.svg') : null
          } onClick={onClickFavorite}/></div>
          <div className='d-flex flex-column justify-between'>  
          <img width="133" height="112" src={image}/>
          <p style={{height: 45, paddingBottom: 10}}>{name}</p>
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