import { movies } from "../../data/movieData"
import "./kinolar.css"
import { Link } from 'react-router-dom'

function kinolar() {


    return (

        <div className='box' >

            


            {
                movies.map((item) => (

                    <Link key={item.movieId} to={`/movies/${item.movieId}`} >

                        <div className="movies-card">
                            <img src={item.rasm} alt={item.movieTitle} />
                            <h4> <p> title:
                                {item.movieTitle}
                            </p></h4>

                            <button className='movies_btn'>

                                <h4>Ko'rish</h4>


                            </button>

                        </div>
                    </Link>
                ))
            }

        </div>

    )
}

export default kinolar