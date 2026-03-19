import { toast } from 'react-toastify'
import SevimlilarMap from '../../components/sevimlilar/SevimlilarMap'
import './sevimlilar.css'

function Sevimlilar({ likeProducts, setLikeProducts }) {

  const removeSevimlilarItem = (item) => {
    const filterData = likeProducts.filter(element => element.id !== item.id)
    setLikeProducts(filterData)
    toast.warn("mahsulot o'chirildi !")
  }

  return (
    <div className='sevimlilar' >
      {
        likeProducts.map(item => (

          <SevimlilarMap removeSevimlilarItem={removeSevimlilarItem} key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default Sevimlilar