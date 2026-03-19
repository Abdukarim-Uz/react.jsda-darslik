
import './notfound.css'

import Lotti from '../../lotties/Lonely 404(1).json'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate()

    const ortga = () => {
        navigate('/')
    }

    return (
        <div className='notfound' >
            <Lottie
                animationData={Lotti}
                autoPlay={true}
                loop={true}
                className='notfoundanimation'
            />

            <button className='bosh-btn' onClick={ortga} >Bosh sahiga</button>
        </div>
    )
}

export default NotFound