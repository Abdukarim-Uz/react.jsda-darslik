import { useContext } from "react"
import BasketItemMap from "../../map/basketItemMap/BasketItemMap"
import { State } from "../../data/Context"
import { useNavigate } from "react-router-dom"
import { IoExit } from "react-icons/io5"

function Basket() {
    const { basket } = useContext(State)
    const navigate = useNavigate()

    const totalPrice = basket.reduce((a, b) => a + (b.price * b.count), 0)


    const ortga = () => {
        navigate(-1)
    }

    return (
        <div className="w-full  h-auto sm:grid-cols-1 md:grid-cols-2 gapx-3 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4  grid grid-cols-5 " >
            {
                basket.map((item) => (
                    <BasketItemMap item={item} key={item.id} />
                ))
            }
            <div className="absolute bottom-10 p-3 w-40 rounded-2xl text-center text-[20px] bg-linear-to-r from-cyan-500 to-blue-500 right-10 text-white cursor-pointer" >
                <h5>{totalPrice} $</h5>
            </div>
            <div onClick={ortga} className="absolute bottom-10 p-3 w-40 rounded-2xl  text-[20px] bg-linear-to-r from-cyan-500 to-blue-500 left-10 text-white flex items-center justify-center gap-5 cursor-pointer" >
                ortga
                <IoExit  />
            </div>
        </div>
    )
}

export default Basket