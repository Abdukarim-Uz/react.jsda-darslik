import { useSelector } from "react-redux"

function Basket() {

    const { count } = useSelector(state => state.son)
    return (
        <div className="w-full min-h-20 h-auto   p-2 mx-auto  gap-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" >
            <h1>{count}</h1>
        </div>
    )
}

export default Basket