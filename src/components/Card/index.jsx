import styles from  './Card.module.scss'
import Axios from 'axios'
import React from 'react'

function Card({image, name, price, onPlus, onNotPlus, obj, itemsCart, setItemsCart}){
  const [isAdded, setIsAdded] = React.useState(false) // Добавить в корзину
  const [isFavorite, setIsFavorite] = React.useState(false) // Добавить в избранное

  const onClickAdded = () => {
    isAdded ? onNotPlus(obj) : onPlus(obj)
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
  }
  
    return(
        <div className={styles.card}>
          <div className={styles.favorite}><img src={isFavorite ? '/img/liked.svg' : '/img/heart.svg'} onClick={onClickFavorite}/></div>
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