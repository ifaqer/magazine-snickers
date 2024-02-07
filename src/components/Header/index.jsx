import {Link} from "react-router-dom"

function Header(props){
    return(
        <header className='d-flex justify-between align-center p-40'> 
        <Link to={"/"}>
        <div className='headerLeft d-flex justify-between align-center'>
          <img width="40" height="40" src='/img/logo.png' className='mr-15'/>
          <div className=''> 
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        </Link>
        <ul className='d-flex'>
          <li className='cu-p d-flex align-start mr-20' onClick={props.cartOpen}>
          <img width="20" height="20" src='/img/cart.svg' className='mr-10'/>
          <p style={{margin:0}}>1200р.</p>
          </li>
          <li className='cu-p'>
          <Link to={"/favorite"}>
          <img width="20" height="20" src='/img/heart.svg' className='mr-20'/>
          </Link>
          </li>
          <li className='cu-p'>
          <img width="20" height="20" src='/img/user.svg'/>
          </li>
        </ul>
      </header>
    )
}
export default Header