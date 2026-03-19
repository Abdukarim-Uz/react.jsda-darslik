import { NavLink } from 'react-router-dom'
import { movies } from '../../data/Moviesdata/Moviesdata'
import './Kinolar.css'



function Kinolar() {

    return (
        <div className='product' >
            {
                movies.map((item) => (
                    <NavLink key={item.movieId} to={`/moviecard/${item.movieId}`} >
                        <div className="card">
                            <img src={item.rasm} alt={item.movieTitle} />
                            <h1>{item.movieTitle}</h1>
                        </div>

                    </NavLink>
                ))
            }
        </div>
    )
}

export default Kinolar