import { use, useEffect, useRef, useState } from 'react'
import './namozVaqtlari.css'
import axios from 'axios'
import NamozVaqtlariMap from '../../components/namozVaqtlariMap/NamozVaqtlariMap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

function NamozVaqtlari() {
    const [dataBase, setData] = useState([])

    const [loading, setLoading] = useState(false)

    const [success, setSuccess] = useState(false)

    const [error, setError] = useState("")

    const shaharRef = useRef()

    const getData = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            const responce = await axios.get(`https://namoz-vaqti.uz/?region=${shaharRef.current.value}`);
            setData([...dataBase, responce.data])
            setSuccess(true)

        } catch (err) {
            console.log(err)
            setError("xatolik sodir bo'ldi")
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className='parent' >

{
    error && <h1>nimadir xatolik ketdi !!</h1>
}

            {
            loading ? <SkeletonTheme baseColor="#a7a7a7" highlightColor="#f0f0f0" >
                    <div className='form-skleton' >

                        <Skeleton height={"180px"} />
                    </div>
                </SkeletonTheme> :
                    <form onSubmit={getData} >
                        <input ref={shaharRef} type="text" placeholder='shaharni kiriting...' required name='shahar' />
                        <button>qidir...</button>
                    </form>
            }


            {
                loading ?
                    <SkeletonTheme baseColor="#a7a7a7" highlightColor="#f0f0f0" >
                        <div className='table-skleton' >

                            <Skeleton height={"300px"} />
                        </div>
                    </SkeletonTheme> :
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>day</th>
                                <th>time</th>
                                <th>shahar</th>
                                <th>viloyat</th>
                                <th>namoz</th>
                                <th>keyingi namoz</th>
                            </tr>
                        </thead>
                        <tbody>

                            {


                                dataBase.map((item, index) => (

                                    <NamozVaqtlariMap item={item} index={index} key={index + 1} dataBase={dataBase} />
                                ))
                            }


                        </tbody>
                    </table>
            }
        </div>
    )
}

export default NamozVaqtlari