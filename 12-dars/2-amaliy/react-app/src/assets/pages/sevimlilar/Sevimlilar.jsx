import { FaTrash } from 'react-icons/fa6'
import './sevimlilar.css'

function Sevimlilar({ sevimlilar, setSevimlilar }) {
    const removeItem = (id) => {
        const filterdItem = sevimlilar.filter(item => item.id !== id)
        setSevimlilar(filterdItem)
    }
    return (
        <div className='sevimlilar' >
            {
                sevimlilar.map(item => (

                    <div key={item.id} className="sevimlilar-card">
                        <img src={item.rasmLink} alt={item.nom} />
                        <h4> nomi: {item.nom}</h4>
                        <h4>miqdor: {item.miqdor}</h4>
                        <h4> narx: {item.narx}</h4>
                        <div className="info">

                            <h5>{item.info}</h5>
                        </div>
                        <button onClick={() => removeItem(item.id)} ><FaTrash className='trash-card' /></button>
                    </div>
                ))
            }
        </div>
    )
}

export default Sevimlilar