import Lottie from 'lottie-react'
import loadingAnimation from '../../lottie/Lonely 404.json';
import './notFound.css'
function NotFound() {
    return (
        <div className='not-found' >

         

            < Lottie animationData={loadingAnimation}
                 loop={true}
                 autoPlay={true}
                 className='loader'
            />


        </div>
    )
}

export default NotFound