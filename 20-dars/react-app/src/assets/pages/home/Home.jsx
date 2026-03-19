import { useEffect, useRef } from 'react';
import styles from "./home.module.css"
import axios from 'axios';
import { toast } from 'react-toastify';

function Home() {
    const nomRef = useRef();
    const linkRef = useRef();
    const davlatRef = useRef();
    const infoRef = useRef();


    const kinolarniQosh = async (e) => {
        e.preventDefault();
        const dataObj = {
            link: linkRef.current.value,
            nom: nomRef.current.value,
            davlat: davlatRef.current.value,
            info: infoRef.current.value
        }

        try {
            const { status } = await axios.post("http://localhost:8000/kinolar", dataObj);
            if (status === 201) {
                toast.success("kino qo'shildi !")
            }
        } catch (err) {
            console.log(err)
        }
        nomRef.current.value = ""
        linkRef.current.value = ""
        davlatRef.current.value = ""
        infoRef.current.value = ""
    }

    useEffect(() => {
        linkRef.current.focus();
    }, [])

    return (
        <div className={styles.home} >
            <form onSubmit={kinolarniQosh} >
                <img src={linkRef} alt="" />
                <input ref={linkRef} type="text" placeholder='kino linkini kiriting...' required name='link' />
                <input ref={nomRef} type="text" placeholder='kino nomi...' required name='kino' />
                <input ref={davlatRef} type="text" placeholder='davlati...' required name='davlat' />
                <textarea ref={infoRef} name="actors" required >

                </textarea>
                <button className={styles.btn} >qo'shish</button>
            </form>
        </div>
    )
}

export default Home