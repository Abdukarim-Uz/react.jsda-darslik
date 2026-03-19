import { RxExit } from 'react-icons/rx'
import './modal.css'
import { use, useEffect, useReducer, useRef } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function Modal({ edit,elementniOlish, setModalhidden}) {

    const nomRef = useRef(edit.nom)
    const davlatRef = useRef(edit.davlat);
    const linkRef = useRef(edit.link);
    const infoRef = useRef(edit.info)
    const shoHiddenModal = () => {
        setModalhidden(false)
    }
    console.log(edit)

    const editItem = async (e) => {
        e.preventDefault();
        const yangiMalumot = {
            id: edit.id,
            nom: nomRef.current.value,
            davlat: davlatRef.current.value,
            link: linkRef.current.value,
            info: infoRef.current.value
        }
        try {
            const { status } = await axios.put(`http://localhost:8000/kinolar/${edit.id}`, yangiMalumot);
            if (status === 200) {
                toast.success("kino tahrirlandi !!")
                setModalhidden(false)
                elementniOlish()
                return;
            }
        } catch (err) {
            console.log(err)
        }

    }


    useEffect(() => {
        linkRef.current.focus();
    }, [])

    return (
        <div className='modal' >
            <div className="modal-card">
                <div className="exit-btn">
                    <button onClick={shoHiddenModal} ><RxExit className='exit-icon' /></button>
                </div>
                <form onSubmit={editItem} >
                    <img src={edit.link} alt={edit.nom} />
                    <input ref={linkRef} defaultValue={edit.link} type="text" placeholder='kino linkini kiriting...' required name='link' />
                    <input ref={nomRef} defaultValue={edit.nom} type="text" placeholder='kino nomi...' />
                    <input ref={davlatRef} defaultValue={edit.davlat} type="text" placeholder='davlati...' />
                    <textarea ref={infoRef} defaultValue={edit.info} name="actors" required >

                    </textarea>
                    <button>tahrirlash</button>
                </form>
            </div>
        </div>
    )
}

export default Modal