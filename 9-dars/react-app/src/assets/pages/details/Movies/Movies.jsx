import { useParams } from 'react-router-dom'

import './movies.css'
import { movies } from '../../../data/movieData'

function Movies() {

    const { id } = useParams()

    const currentMovie = movies.find(item => item.movieId === +id)



    console.log(currentMovie)

    return (
        <div>
            <div className='card-box' >




                <div className="child">
                    <h1>{currentMovie?.movieTitle}</h1>

                    <img src={currentMovie?.rasm} alt={currentMovie?.movieTitle} />
                </div>
                <div className="child_two">
                    <div className="child_two_one">
                        <div className="price">
                            <h1 style={{ color: "#62a6ffff" }} >yili: {currentMovie?.year}</h1>

                            <label htmlFor="kategory">
                                <p>davlati</p>
                                <h1>{currentMovie?.country}</h1>
                            </label>
                        </div>
                        <div className="images">
                            <img src={currentMovie?.rasm} alt={currentMovie?.movieTitle} />
                            <img src={currentMovie?.rasm} alt={currentMovie?.movieTitle} />
                            <img src={currentMovie?.rasm} alt={currentMovie?.movieTitle} />
                        </div>
                    </div>
                    <div className="child_two_two">
                        <div className="text">
                            <h1>reyting: {currentMovie?.rating}</h1>
                        </div>

                        <div className="btn_two">
                            <button>onlayn ko'rish</button>
                            <button>yuklab olish</button>
                            <button>tizer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies