import { useState } from 'react'

import './login.css'
import { nanoid } from 'nanoid/non-secure';

function Login({ setMovies, movies, data, setdata }) {

    const [newurl, setNewurl] = useState()

    

    const add = (event) => {
        event.preventDefault();

        const optionValue = event.target.tanla.value

        const nomi = event.target.nomi.value

        const url = event.target.url.value

        setNewurl(url)

        if (optionValue === "kino") {

            const objdata = {
                id: nanoid(5),
                nomi: nomi,
                url: url
            }

            setMovies([...movies, objdata])


            return;
        }

        if (optionValue === "malumot") {
            const objdata = {
                id: nanoid(5),
                nomi: nomi,
                url: url
            }
            setdata([...data, objdata])

            console.log(data)

            return;
        }
    }




    return (
        <div className='login' >
            <form onSubmit={add} >
                <select name="tanla" >
                    <option value="bosh"></option>
                    <option value="kino">kinolar</option>
                    <option value="malumot">boshqa ma'lumot</option>
                </select>
                <input
                    type="text"
                    placeholder='nomi kiriting...'
                    required
                    name='nomi'
                />
                <input
                    type="text"
                    placeholder='url kiriting...'
                    required
                    name='url'
                />


                <img src={newurl} />

                <button>kirit</button>

            </form>
        </div>
    )
}

export default Login