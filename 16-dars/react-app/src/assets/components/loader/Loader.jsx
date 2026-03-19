import { BarLoader } from 'react-spinners'
import './loader.css'

function Loader() {
    return (
        <div className='Bar-loader' >
            <BarLoader width={'100%'} color='rgba(219, 68, 68, 1)' />
        </div>
    )
}

export default Loader