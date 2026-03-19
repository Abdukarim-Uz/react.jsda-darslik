import { useNavigate, useParams } from "react-router-dom"
import './detail.css'
import { FaEdge, FaEdit, FaTrash } from "react-icons/fa"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import Modal from "../../components/modal/Modal"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

function Detail() {
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [modalhidden, setModalhidden] = useState(false)
    const navigate = useNavigate()
    const [element, setElement] = useState(null)
    const { id } = useParams()
    const [edit, setEdit] = useState(null)

    async function elementniOlish() {
        setLoading(true)
        try {
            const { data } = await axios.get(`http://localhost:8000/kinolar/${id}`)
            setElement(data)
        } catch (err) {
            console.log(err)
            setError("nimadir xatolik o'tdi")
        } finally {
            setLoading(false)
        }

    }


    const ochirish = async (id) => {
        try {
            const { status } = await axios.delete(`http://localhost:8000/kinolar/${id}`);
            if (status === 200) {
                toast.success("kino o'chirildi");
                navigate("/kinolar")
                return;
            }
        } catch (err) {
            console.log(err)
        }
    }

    const edited = (item) => {
        setEdit(item)
        setModalhidden(true)

    }


    useEffect(() => {
        elementniOlish()
    }, [])
    return (
        <div className="detail" >
            <div className="detail-left">
                {
                    loading ?

                        <SkeletonTheme baseColor="#202020" highlightColor="#444">
                            <p>
                                <Skeleton height={"600px"} count={1} />
                            </p>
                        </SkeletonTheme>

                        :
                        <img src={element?.link} alt={element?.nom} />
                }
            </div>
            <div className="detail-right">
                <div className="nom">
                    {
                        loading ?

                            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                <p>
                                    <Skeleton height={"20px"} count={1} />
                                </p>
                            </SkeletonTheme>

                            :
                            <h4>kino nomi: {element?.nom}</h4>
                    }
                </div>
                <div className="davlati">

                    {
                        loading ?

                            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                <p>
                                    <Skeleton height={"20px"} count={1} />
                                </p>
                            </SkeletonTheme>

                            :
                            <h4>
                                davlati: {element?.davlat}
                            </h4>
                    }

                </div>
                <div className="info">

                    {
                        loading ?

                            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                <p>
                                    <Skeleton height={"200px"} count={1} />
                                </p>
                            </SkeletonTheme>

                            :

                            <h4>
                                {element?.info}
                            </h4>
                    }

                    <div className="btns">
                        {
                            loading ?

                                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                                    <p>
                                        <Skeleton height={"200px"} count={1} />
                                    </p>
                                </SkeletonTheme>

                                :

                                <div>
                                    <button onClick={() => ochirish(element.id)} ><FaTrash className="trash" /></button>
                                    <button onClick={() => edited(element)} ><FaEdit className="edit" /></button>
                                </div>
                        }
                    </div>
                </div>
            </div>

            {
                modalhidden ?
                    <Modal elementniOlish={elementniOlish} setModalhidden={setModalhidden} edit={edit} /> : null
            }
        </div>
    )
}

export default Detail