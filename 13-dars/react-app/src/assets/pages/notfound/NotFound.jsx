import Lottie from 'lottie-react'
import cloud from '../../lottie/404 Error - Doodle animation.json'
import './notfound.css'

function NotFound() {
    return (
        <div className='notfound' >
            <Lottie
            animationData={cloud}
            loop={true}
            autoPlay={true}
            className='notfound-icon'
            />
        </div>
    )
}

export default NotFound