
import { toast } from 'react-toastify'
import LikeProdutcsMap from '../../components/likeProductMap/LikeProductMap'
import './sevimlilar.css'
function Sevimlilar({ likeProdutcs, setLikeProducts }) {

    const removeItem = (item) => {
        toast.warn("mahsulot o'chirilidi !")
        const itemFiltered = likeProdutcs.filter(element => element.id !== item.id)
        setLikeProducts(itemFiltered)
    }
    return (
        <div className='sevimlilar' >
            {
                likeProdutcs.map((item) => (

                    <LikeProdutcsMap removeItem={removeItem} key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Sevimlilar