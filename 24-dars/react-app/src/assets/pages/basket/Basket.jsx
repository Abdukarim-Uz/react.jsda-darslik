import { useContext } from "react"
import { Context } from "../../data/StateContextProvider"
import BasketItem from "../../components/Maps/basketItem/BasketItem"

function Basket() {

    const { basket } = useContext(Context)

    const jamiNarx = basket.reduce((a, b) => a + (b.price * b.count), 0)


    console.log(jamiNarx)

    console.log(jamiNarx)
    return (
        <div className="w-[95%] flex-wrap text-white grid grid-cols-4 gap-3  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl p-10 rounded-2xl mx-auto" >
            {
                basket.map((item) => (
                    <BasketItem item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default Basket