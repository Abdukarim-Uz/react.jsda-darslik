import { FaHeart } from "react-icons/fa"
import { FaShop } from "react-icons/fa6"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom"

function ProductsMap({ item, loading }) {
    return (
        <>

            {
                loading &&

                (<SkeletonTheme baseColor="#a7a7a7" highlightColor="#b6b6b6">

                    <div className="card">




                        <Skeleton className='img-skleton' height={"160px"} width={"90% "} />


                        <div className="info">

                            <p><Skeleton /></p>
                            <p><Skeleton width={"220px"} /></p>
                            <p><Skeleton width={"100px"} /></p>
                            <p><Skeleton width={"70px"} /></p>
                        </div>
                        <Skeleton className='img-skleton' width={"90%"} height={"39px"} />

                    </div>

                </SkeletonTheme>)
            }
            <div className="card">
                <div className="like">
                    <FaHeart className="like-icon" />
                </div>

                <div className="img">

                    <img src={item.image} alt={item.title} />
                </div>
                <div className="info">

                    <h4>title:{item.title}</h4>
                    <h4>price:{item.price}</h4>
                    <h4>rate:{item.rating.rate}</h4>
                </div>
                <div className="btn">
                    <Link className="link" to={`/detail/${item.id}`} >
                        <button> <FaShop /> shop</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProductsMap