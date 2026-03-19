import './notFound.css'
import lottie from '../../lotties/Lonely 404(1).json'
import Lottie from 'lottie-react'

function NotFound() {
    return (
        <div className='not-found' >
            <Lottie  animationData={lottie} loop={true} autoPlay={true} />
        </div>
    )
}

export default NotFound