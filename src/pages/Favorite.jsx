import Card from '../components/Card'

export default function Favorite({favorite, itemsCart, setItemsCart, setFavorite}){
    return(
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
    )
}