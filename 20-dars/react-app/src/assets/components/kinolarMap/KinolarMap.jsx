import { useState } from "react"
import { Link } from "react-router-dom"
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
function KinolarMap({ item, loading }) {
    const [show, setShow] = useState(false)
    const showHidden = () => {
        setShow(true)
    }
    const sethidden = () => {
        setShow(false)
    }
    return (
        <>
            {
                loading ? <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <p>
                        <Skeleton height={"350px"} count={1} />
                    </p>
                </SkeletonTheme> :

                    <Link to={`/detail/${item.id}`} onMouseOver={showHidden} onMouseLeave={sethidden} className="link" >
                        <img src={item.link} alt={item.nom} />
                        <div className={show ? "hidden" : "show-hidden"}>
                            <div className="hidden-footer">
                                <h1>{item.nom}</h1>
                            </div>
                        </div>
                    </Link>
            }
        </>
    )
}

export default KinolarMap