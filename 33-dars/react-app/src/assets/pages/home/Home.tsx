
import { useNavigate } from 'react-router-dom'
import '../../../App.css'
import { use, useState, type ChangeEvent, type SubmitEvent } from 'react'
import type { HomeType } from './homeTypez'

function Home() {


    const [text, setText] = useState<string>()


    const [chose, setChose] = useState<string>()

    const [dataObj, setDataObj] = useState<HomeType | null>(null)

    const matn2 = (event: ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value)
        console.log(text)
    }


    const tanla = (event: ChangeEvent<HTMLSelectElement>): void => {
        setChose(event.target.value)
    }


    const dataobj1 = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const forma = new FormData(event.target)
        const form = Object.fromEntries(forma.entries())
        console.log(form)
    }

    const navigate = useNavigate()

    return (
        <div className="app">


            <header className="hero">
                <h1>{text}</h1> <h1>{chose}</h1>
                <input type="text" onChange={matn2} />


                <select onChange={tanla} name="sle">
                    <option value="uz">uz</option>
                    <option value="ru">ru</option>
                    <option value="en">en</option>
                </select>


                <form onSubmit={dataobj1} >
                    <input type="text" name='ism' required />
                    <input type="number" name='yosh' required />
                    <button>kirit</button>
                </form>


                <img  style={{width:"600px", marginTop:"20px"}} src="https://ilmlar.uz/wp-content/uploads/2021/12/tabiat-haqida-topishmoqlar-toplami.jpeg"/>

                <h1 style={{ cursor: "pointer" }} >
                    Assalomu alaykum
                </h1>

                <button onClick={() => navigate('/products')} className="main-btn">keyingi sahifa</button>
            </header>
        </div>
    )
}

export default Home