import { useDispatch, useSelector } from "react-redux"
import { ism2, job2 } from "../../../features/user/userSlice"
import { add, remove } from "../../../features/son/sonSlice"

function Home() {

    const { ism, job } = useSelector(state => state.user)
    const { count } = useSelector(state => state.son)


    const dispatch = useDispatch()

    const ozgar = () => {
        dispatch(ism2())
    }

    const added = () => {
        dispatch(add())
    }

    const removed = () => {
        dispatch(remove())
    }

    const ozgar1 = () => {
        dispatch(job2())
    }
    return (
        <div className="w-full min-h-20 h-auto  flex items-center  p-2 mx-auto  cursor-pointer *:cursor-pointer gap-20 ">

            <div className="flex items-center gap-3" >

                <h1>{ism}</h1>
                <button className="btn" onClick={ozgar}>o'zgartir</button>
            </div>
            <div className="flex items-center gap-3">

                <h1>{count}</h1>
                <button className="btn" onClick={added} >qo'sh</button>
                <button className="btn" onClick={removed} >ayir</button>
            </div>
            <div className="flex items-center gap-3">

                <h1>{job}</h1>
                <button onClick={ozgar1} className="btn" >o'zgartir</button>
            </div>
        </div>
    )
}

export default Home