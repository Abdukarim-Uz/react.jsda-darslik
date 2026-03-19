import { FaHeart } from 'react-icons/fa'
import './asosiy.css'
import { CiHeart } from 'react-icons/ci'
import CardMap from '../../components/cardMap/CardMap'
import { products } from '../../data/mahsulotlar'
import { lazy } from 'react'

function Asosiy() {


    return (
        <div className='asosiy' >
            {
                products.map(item => (

                    <CardMap key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Asosiy