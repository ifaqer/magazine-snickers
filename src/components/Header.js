function Header(props){
    return(
        <header className='d-flex justify-between align-center p-40'> 
        <div className='headerLeft d-flex justify-between align-center'>
          <img width="40" height="40" src='/img/logo.png' className='mr-15'/>
          <div className='headerInfo'> 
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='headerRight d-flex'>
          <li className='mr-30 cu-p' onClick={props.cartOpen}>
          <img width="18" height="18" src='/img/cart.svg' className='mr-10'/>
            <span>1205 руб.</span>
          </li>
          <li>
          <img width="18" height="18" src='/img/user.svg'/>
          </li>
        </ul>
      </header>
    )
}
export default Header