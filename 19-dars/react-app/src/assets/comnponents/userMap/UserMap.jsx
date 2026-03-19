import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { NavLink } from "react-router-dom"


function UserMap({ loading, item }) {
    return (
        <>
            {
                loading ? < SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <p>
                        <Skeleton height={"90px"} count={1} />
                    </p>
                </SkeletonTheme > :
                    <NavLink to={`/detail/${item.id}`} >
                        <h5>ism:{item.ism}</h5>
                        <h5>ish:{item.ish}</h5>
                    </NavLink>
            }
        </>
    )
}

export default UserMap