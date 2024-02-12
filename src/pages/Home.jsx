import Card from '../components/Card'

export default function Home({
    search,
    onChangeSearchInput,
    items,
    itemsCart,
    setItemsCart,
    favorite,
    setFavorite,
    isReload,
    setIsReload
}){
    return(
        <>
        <div className='content'>
          <div className='d-flex align-center justify-between p-10'>
          <h1 className='ml-20'>{search ? `Поиск по запросу: "${search}"` : 'Все кроссовки'}</h1>
          <div className='search-box d-flex'>
            <img src='/img/search.svg'/>
            <input placeholder='Поиск...' onChange={onChangeSearchInput}></input>
          </div>
          </div>
          <div className="cards d-flex flex-wrap p-15">
            {isReload ? ([...Array(7)]).map(() => <Card loading={isReload}/>) :
              items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((val, index) => <Card
              key={index}
              price={val.price}
              name={val.name}
              image={val.image}
              obj={val}
              itemsCart={itemsCart}
              setItemsCart={setItemsCart}
              favorite={favorite}
              setFavorite={setFavorite}
              added={itemsCart.some((obj)=>obj.id==val.id) ? true : false}
              loading={isReload}
              onPlus={(obj) => {setItemsCart((prev) => [...prev, obj])}}
              onNotPlus={(obj)=>{setItemsCart(itemsCart.filter((item)=>item != obj))}}
            />)
            }
          </div>
        </div>
        </>
    )
}