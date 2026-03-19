import { FaEdit, FaTrash } from 'react-icons/fa'
import './detail.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Modal from '../../comnponents/modal/Modal'

function Detail({ removeItem }) {
    const navigate = useNavigate()
    const [itemData, setItemData] = useState(null)
    const [hidden, setHidden] = useState(false)

    const { id } = useParams()
    async function getItem() {
        try {
            const { data } = await axios.get(`http://localhost:8000/talabalar/${id}`);
            setItemData(data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getItem()
    }, [])

    const hiddenModal = () => {
        setHidden(true)
    }
    const shoModal = () => {
        setHidden(false)

    }

    const ortga = ()=>{
        navigate(-1)
    }
    return (
        <div className='detail' >
            <h3>ism: {itemData?.ism}</h3>
            <h3>familiya: {itemData?.familiya} </h3>
            <h3>yosh: {itemData?.yosh} </h3>
            <h3>ish: {itemData?.ish} </h3>
            <h3>telefon: {itemData?.telefon}  </h3>
            <h3>email: {itemData?.email} </h3>
            <div className="btns">
                <button onClick={() => removeItem(itemData)} ><FaTrash fill='red' className='icon' /></button>
                <button onClick={hiddenModal} ><FaEdit fill='green' className='icon' /></button>
            </div>

            <button onClick={ortga} >ortga</button>

            {
                hidden ? <Modal getItem={getItem} setHidden={setHidden} itemData={itemData} shoModal={shoModal} /> : null
            }
        </div>
    )
}

export default Detail