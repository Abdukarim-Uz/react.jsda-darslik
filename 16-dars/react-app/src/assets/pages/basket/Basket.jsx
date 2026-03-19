import { toast } from 'react-toastify'
import BasketProductsMap from '../../components/basketProducts/BasketProductsMap'
import './basket.css'

function Basket({ basketProdutcs, setBasketProducts, likeProdutcs, setLikeProducts }) {

    const addBasketProducts = (item) => {
        const checkItem = likeProdutcs.some(element => element.id == item.id)
        console.log(checkItem)
        if (checkItem) {
            toast.warn("siz bu mahsulotni qo'shdingiz")
        }
        else {
            toast.success("bu mahsulotni qo'shdingiz")
            setLikeProducts([...likeProdutcs, item])
        }
    }


    const removeItem = (item) => {
        const basketItenRemove = basketProdutcs.filter(element => element.id !== item.id)
        setBasketProducts(basketItenRemove)
        toast.warn("bu mahsulot o'chirildi !")
    }
    return (


        <div className='basket' >
            {
                basketProdutcs.map((item) => (

                    <BasketProductsMap removeItem={removeItem} addBasketProducts={addBasketProducts} key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Basket