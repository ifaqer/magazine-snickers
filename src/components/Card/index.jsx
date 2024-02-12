import styles from  './Card.module.scss'
import Axios from 'axios'
import React from 'react'
import ContentLoader from "react-content-loader"

function Card({image, name, price, onPlus, onNotPlus, obj, favorite, loading, added, setFavorite, itemsCart, setItemsCart}){
  const [isAdded, setIsAdded] = React.useState(added) // Состояние добавления в корзину
  const [isFavorite, setIsFavorite] = React.useState(false) // Состояние добавления в избранные

  const onClickAdded = () => {
    if (isAdded == true){
      //Axios.delete(`https://655e7c6d879575426b43950e.mockapi.io/cart/${obj.id}`)
      onNotPlus(obj)
    } else{
      Axios.post(`https://655e7c6d879575426b43950e.mockapi.io/cart`, obj)
      onPlus(obj)
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
          {loading ? <ContentLoader 
                        speed={2}
                        width={205}
                        height={215}
                        viewBox="0 0 205 215"
                        backgroundColor="#edeeee"
                        foregroundColor="#e9e7e7">
                        <rect x="0" y="125" rx="5" ry="5" width="164" height="15" /> 
                        <rect x="0" y="145" rx="5" ry="5" width="85" height="15" /> 
                        <rect x="130" y="180" rx="10" ry="10" width="32" height="32" /> 
                        <rect x="0" y="183" rx="5" ry="5" width="80" height="25" /> 
                        <rect x="0" y="0" rx="10" ry="10" width="164" height="112" />
                      </ContentLoader>
                   : <>
                    {window.location.pathname != '/favorite' && <div className={styles.favorite}><img src={isFavorite ? '/img/liked.svg' : '/img/heart.svg'} onClick={onClickFavorite}/></div>}
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
                   </>}
        </div>
    )
}

export default Card