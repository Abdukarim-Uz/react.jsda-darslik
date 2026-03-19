import { FaTrashAlt } from 'react-icons/fa'
import './sevimlilar.css'

function Sevimlilar({ sevimlilar, setSevimlilar }) {

    const removeItemfavorite = (id) => {
        const filterItem = sevimlilar.filter(item => item.id !== id)

        setSevimlilar(filterItem)

    }

    return (
        <div className='sevimlilar' >

            {
                sevimlilar.length === 0 ? <h2>ma'lumot topilmadi</h2> :

                    sevimlilar.map(item => (

                        <div key={item.id} className="card">
                            <img src={item.url} alt={item.nom} />
                            <h4> nomi:   {item.nom}</h4>
                            <h4>miqdor:    {item.son}</h4>
                            <h4>narxi:    {item.narx}</h4>
                            <h4> description:   {item.about}</h4>
                            <button className='remove-btn' onClick={() => removeItemfavorite(item.id)} ><FaTrashAlt className='trash' /></button>
                        </div>
                    ))
            }
        </div>
    )
}

export default Sevimlilar