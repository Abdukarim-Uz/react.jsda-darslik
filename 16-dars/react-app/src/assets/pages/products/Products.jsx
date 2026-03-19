import { toast } from 'react-toastify'
import ProductMap from '../../components/productMap/ProductMap'
import { products } from '../../data/Products'
import './products.css'
function Products({ basketProdutcs, setBasketProducts, likeProdutcs, setLikeProducts }) {

    const addLikeProducts = (item) => {

        const checkItem = likeProdutcs.some(element => element.id == item.id)
        if (checkItem) {
            toast.warn("bu mahsulot sevimlilarda bor!")
        } else {
            setLikeProducts([...likeProdutcs, item])

            toast.success("mahsulotingiz sevimlilarga qo'shildi!")
        }

    }

    const addBasketProduct = (item) => {
        const checkItem = basketProdutcs.some(element => element.id === item.id)
        if (checkItem) {
            toast.warn("siz bu mahsulotni qo'shgansiz !")
        } else {
            toast.success("bu mahsulotni qo'shdingiz !")
            setBasketProducts([...basketProdutcs, item])
        }
    }
    return (
        <div className='products' >
            {
                products.map((item) => (

                    <ProductMap addBasketProduct={addBasketProduct} addLikeProducts={addLikeProducts} key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Products