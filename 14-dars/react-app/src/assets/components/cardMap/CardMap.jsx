import { CiHeart } from 'react-icons/ci'
import './cardMap.css'
import { products } from '../../data/mahsulotlar'

function CardMap({ item }) {
    return (
        <>
            <div className="card">
                <div className="like">
                    <CiHeart />
                </div>
                <img src={item.rasmi} alt={item.nom} />
                <h3>nomi:{item.nom}</h3>
            </div>
        </>

    )
}

export default CardMap