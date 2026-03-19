import { BarLoader } from 'react-spinners'
import './loader.css'

function Loader() {
    return (
        <div className='barloader' >
            <BarLoader width={"100%"} height={"5px"} color='red' />
        </div>
    )
}

export default Loader