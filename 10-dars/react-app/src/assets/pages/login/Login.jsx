import { useState } from 'react'
import './login.css'
import { nanoid } from 'nanoid/non-secure'


function Login({ setMalumot, malumot, kinolar, setNomiDisplay, setUrlDisplay, setOptionDisplay, setKinolar }) {

    const [url, setUrl] = useState()

    const [nomi, setNomi] = useState()

    const [value, setValue] = useState()


    const qiymatber = (event) => {
        event.preventDefault();
        setNomiDisplay(nomi)
        setUrlDisplay(url)
        setOptionDisplay(value)
        if (value === "kino") {
            const dataobj = {
                id: nanoid(5),
                nomi: nomi,
                url: url
            }
            setKinolar([...kinolar, dataobj])

        }

        if (value === "ma'lumot") {
            const dataobj = {
                id: nanoid(5),
                nomi: nomi,
                url: url
            }

            setMalumot([...malumot, dataobj])


        }
    }



    return (
        <div className='login' >
            <form onSubmit={qiymatber} >
                <select name="dataset" onChange={(e) => setValue(e.target.value)} >
                    <option ></option>
                    <option value="kino">kinolar</option>
                    <option value="ma'lumot">boshqa-ma'lumot</option>
                </select>
                <input
                    type="text"
                    required
                    name='text'
                    placeholder='malumot kiriting...'
                    onChange={(e) => setNomi(e.target.value)} />
                <input
                    type="text"
                    required
                    name='url'
                    placeholder='linkni kiriting...'
                    onChange={(e) => setUrl(e.target.value)} />
                <img src={url} />
                <button>kirit</button>
            </form>
        </div>
    )
}

export default Login