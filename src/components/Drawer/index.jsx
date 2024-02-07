import Axios from 'axios'
import styles  from './Drawer.module.scss'

function Drawer({cartClose, itemsCart, setItemsCart, fullPrice, setFullPrice}){
  const allPrice = (price) => {
    setFullPrice(0 + price)
  }
  const removeItem = (obj) => {
    setItemsCart(itemsCart.filter((item)=>item != obj))
    Axios.delete(`https://655e7c6d879575426b43950e.mockapi.io/cart/${obj.id}`)
  }

    return(
        <div className={styles.overlay}>
        {itemsCart.length > 0
        ? <div className={styles.drawer}>
        <div>
        <h2 className='d-flex justify-between mb-15'>Корзина<img src='/img/btn-remove.svg' onClick={cartClose} alt='Remove' className='removeBtn cu-p'/></h2>
        <div className={styles.items}>
        {itemsCart.map(val => (
          <div className={styles.cartItem}>
          <img src={val.image} width={70} height={70} className='mr-15'/>
          <div className='mr-15'>
            <p className='mb-5 mt-5'>{val.name}</p>
            {allPrice(Number(val.price))}
            <b>{val.price} руб.</b>
          </div>
          <img src='/img/btn-remove.svg' alt='Remove' onClick={()  => removeItem(val)} className={styles.removeBtn}/>
        </div>
        ))}
        </div>
        </div>
        <div className={styles.cartTotalBlock}>
        <ul>
          <li className='d-flex'>
            <span>Итого:</span>
            <div></div>
            <b>{fullPrice} руб.</b>
          </li>
          <li className='d-flex'>
          <span>Налог 5%:</span>
            <div></div>
            <b>{(fullPrice / 100) * 5} руб.</b>
          </li>
        </ul>
        <button className={styles.greenButton}>Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
        </div>
      </div>
      : <div className={styles.drawer}>
      <div>
      <h2 className='d-flex justify-between mb-15'>Корзина<img src='/img/btn-remove.svg' onClick={cartClose} alt='Remove' className='removeBtn cu-p'/></h2>
        <div className={styles.emptyBlock}>
        <img className="mb-20" src='/img/empty-cart.jpg' width={180} height={180} alt="empty-cart" />
        <h2>Корзина пустая</h2>
        <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок,  чтобы сделать заказ!</p>
        <button onClick={cartClose} className={styles.greenButton}>
          <img src="/img/arrow.svg" alt="Arrow" />
          Вернуться назад
        </button>
        </div>
      </div>
    </div>}
        </div>
    )
}
export default Drawer