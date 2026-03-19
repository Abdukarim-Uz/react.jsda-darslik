import React, { useState } from 'react'

import "./asosiy.css"



function Asosiy() {

    const [ism, setIsm] = useState("")

    const [raqam, setRaqam] = useState("")

    const [yosh, setyosh] = useState("")

    const [course, setCourse] = useState("")



    const [obj, setObj] = useState({})

    const tekshir = (event) => {
        event.preventDefault();
        setObj({
            ism: ism,
            raqam: raqam,
            yosh: yosh,
            course: course
        })
        console.log(obj)

    }


    return (
        <div>
            <form className='add-form' >
                <input type="text" onChange={(e) => setIsm(e.target.value)} name='ism' placeholder='ismni kiriting..' required />
                <input type="text" onChange={(e) => setRaqam(e.target.value)} name='raqam' placeholder='telefon raqamizni kiriting..' required />
                <input type="number" onChange={(e) => setyosh(e.target.value)} name='yosh' placeholder='yoshingizni kiriting..' required />
                <select onChange={(e) => setCourse(e.target.value)} >
                    <option value="fronten-developer">fronten developer</option>
                    <option value="mobile-developer">mobile developer</option>
                    <option value="cyber-security">cyber-security</option>
                </select>

                <button onClick={tekshir} >kiritish</button>

            </form>

            <h1>salom {obj.ism} siz {obj.course} kursini xarid qildingiz, siz {obj.yosh} yoshdasiz. telefon raqzmingiz {obj.raqam}</h1>
            

        </div>
    )
}

export default Asosiy