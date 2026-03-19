import { toast } from 'react-toastify'
import BasketMap from '../../components/basketMap/BasketMap'
import './basket.css'

function Basket({ numberArray, setNumberArray, newBasket, setNewBasket, setLikeProducts, likeProducts }) {

    const removeItem = (id) => {
        const removedItem = newBasket.filter(item => item.id !== id)
        const newArrey = numberArray.pop();
        setNumberArray(newArrey)
        setNewBasket(removedItem)

    }

    const addSevimlilarItem = (item) => {
        const finItem = likeProducts.some(element => element.id === item.id)
        if (finItem) {
            toast.warn("bu mahsulot allaqachon bor !")
        } else {

            setLikeProducts([...likeProducts, item])
            toast.success("Bu mahsulot sevimlilarga qo'shildi ! ")
        }
    }



    return (
        <div className='basket' >
            {
                newBasket.map(item => (

                    <BasketMap addSevimlilarItem={addSevimlilarItem} removeItem={removeItem} item={item} key={item.id} />
                ))
            }

        </div>
    )
}

export default Basket