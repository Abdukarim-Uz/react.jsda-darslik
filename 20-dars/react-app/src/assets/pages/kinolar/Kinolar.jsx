import { useEffect, useState } from 'react'
import KinolarMap from '../../components/kinolarMap/KinolarMap'
import './Kinolar.css'
import axios from 'axios'

function Kinolar() {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [kinolarry, setKinolarry] = useState([])
    async function malumotlarniOlish() {
        setLoading(true)
        try {
            const { data } = await axios.get("http://localhost:8000/kinolar");
            setKinolarry(data)
        } catch (err) {
            console.log(err)
            setError("nimadir xatolik bo'ldi")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        malumotlarniOlish()
    }, [])
    return (
        <div className='kinolar' >
            {
                kinolarry.map(item => (

                    <KinolarMap loading={loading} malumotlarniOlish={malumotlarniOlish} key={item.id} item={item} />
                ))
            }

        </div>
    )
}

export default Kinolar