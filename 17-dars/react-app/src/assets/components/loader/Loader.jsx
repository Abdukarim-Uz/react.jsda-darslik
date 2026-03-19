import { BarLoader } from 'react-spinners'
import './loader.css'

function Loader() {
    return (
        <div className='loader' >
            <BarLoader width={"100%"} color='red' />

        </div>
    )
}

export default Loader