
// import Lottie from 'lottie-react'
import Lottie from 'lottie-react'
import cloud from '../../lottie/404 Error - Doodle animation.json'

import './notFound.css'


function NotFound() {
    return (
        <div className='notFound' >
            <Lottie
                animationData={cloud}
                loop={true}
                autoPlay={true}
                className='loader'
            />

        </div>
    )
}

export default NotFound