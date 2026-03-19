import './notfound.css'
import lottie from '../../lotties/Lonely 404(1).json'
import Lottie from 'lottie-react'

function NotFound() {
    return (
        <div className='flex justify-center align-center border-2 border-white max-w-1600xl my-auto mx-auto' >
            <Lottie className='lottie-style' animationData={lottie} loop={true} />
        </div>
    )
}

export default NotFound