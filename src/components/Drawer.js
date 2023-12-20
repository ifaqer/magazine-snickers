import Axios from 'axios'

function Drawer({cartClose, itemsCart, setItemsCart}){
  let fullPrice = 0
  const allPrice = (price) => {
    fullPrice = fullPrice + price
  }
  const removeItem = (obj) => {
    Axios.delete(`https://655e7c6d879575426b43950e.mockapi.io/cart/${obj.id}`)
    itemsCart.splice(itemsCart.indexOf(obj), 1)
    setItemsCart([...itemsCart])
  }

    return(
        <div className='overlay'>
        <div className='drawer'>
          <div>
          <h2 className='d-flex justify-between mb-15'>Корзина<img src='/img/btn-remove.svg' onClick={cartClose} alt='Remove' className='removeBtn cu-p'/></h2>
          <div className='items'>
          {itemsCart.map(val => (
            <div className='cartItem d-flex align-center'>
            <img src={val.image} width={70} height={70} className='mr-15'/>
            <div className='mr-15'>
              <p className='mb-5 mt-5'>{val.name}</p>
              {allPrice(Number(val.price))}
              <b>{val.price} руб.</b>
            </div>
            <img src='/img/btn-remove.svg' alt='Remove' onClick={()  => removeItem(val)} className='removeBtn'/>
          </div>
          ))}
          </div>
          </div>
          <div className='cartTotalBlock'>
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
          <button className='greenButton cu-p'>Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
          </div>
        </div>
        </div>
    )
}
export default Drawer