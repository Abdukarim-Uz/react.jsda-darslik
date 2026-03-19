import { useParams } from 'react-router-dom'
import './detail.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { FaShop } from 'react-icons/fa6'
function Detail() {
    const { id } = useParams()
    const [item, setItem] = useState(null)

    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function getItemData() {
        setLoading(true)
        try {
            const responce = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setItem(responce.data)
            setSuccess(true)
        } catch (err) {
            console.log(err)
            setError("xatolik sodir bo'ldi")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getItemData()
    }, [])

    console.log("loading:", loading)
    console.log("success:", success)
    console.log("error:", error)
    return (
        <div className='grid' >




            {
                loading &&

                <SkeletonTheme baseColor="#a7a4a4" highlightColor="#ffffff">
                    <div className="detail-left">
                        <Skeleton height={"600px"} />
                    </div>

                    <div className="detail-rigth">
                        <div>

                            <h3><Skeleton width={"30%"} height={"8px"} /></h3>
                            <div className="info">

                                <p> <Skeleton width={"370px"} height={"10px"} /> </p>
                                <p> <Skeleton width={"360px"} height={"10px"} /> </p>
                                <p> <Skeleton width={"380px"} height={"10px"} /> </p>
                                <p> <Skeleton width={"340px"} height={"10px"} /> </p>

                            </div>
                            <div className="about">

                                <h4> <Skeleton width={"210px"} height={"11px"} /> </h4>
                                <h4><Skeleton width={"160px"} height={"11px"} /></h4>
                                <h4><Skeleton width={"180px"} height={"11px"} /></h4>
                            </div>
                            <div className="btn-shop">
                                <div>

                                    <h4><Skeleton width={"140px"} height={"40px"} /></h4>
                                    <h4><Skeleton width={"140px"} height={"40px"} /></h4>
                                </div>
                                    
                            </div>
                        </div>
                    </div>

                </SkeletonTheme>
            }


            <div className="detail-left">
                <img src={item?.image} alt={item?.title} />

            </div>
            <div className="detail-rigth">
                <h3>price:{item?.price}</h3>
                <div className="info">

                    <p> {item?.description} </p>
                </div>
                <div className="about">

                    <h4>category: {item?.category} </h4>
                    <h4>rate: {item?.rating.rate}</h4>
                    <h4>count: {item?.rating.count}</h4>
                </div>
                <div className="btn-shop">
                    <input type="number" min={1} defaultValue={1} />
                    <button><FaShop /> sotib olmoq </button>
                </div>
            </div>
        </div>
    )
}

export default Detail