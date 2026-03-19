import { useContext } from 'react'
import { StateContext } from '../../../App'
import tabiat from '../../components/img/tabiat3.jpg'
function Home() {
    const { movies } = useContext(StateContext)

    return (
        <div className=" container p-4 text-2xl gap-6 text-white mx-auto  grid grid-cols-6 " >
            {
                movies.map(item => (

                    <div className='w-70 p-2 h-70 ' >
                        <img src={item.rasm} className='border w-[80%] h-[70%] mb-3 mx-auto' />
                        <h5 className=' w-[80%] mx-auto' >{item.movieTitle}</h5>
                    </div>
                ))
            }

        </div>
    )
}

export default Home