import { BarLoader } from 'react-spinners'
import './loader.css'

function Loader() {
    return (
        <div className='loader' >
            <BarLoader width={"100%"} height={"7px"} color='red' />

        </div>
    )
}

export default Loader