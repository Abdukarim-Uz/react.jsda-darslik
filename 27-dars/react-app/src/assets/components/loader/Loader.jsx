import React from 'react'
import { BarLoader } from 'react-spinners'

function Loader() {
    return (
        <div className='absolute top-0 left-0 w-full ' >
            <BarLoader width={"100%"} color='blue' />
        </div> 
    )
}

export default Loader