import { useRef, useState, type ChangeEvent, type MouseEvent } from "react"

function Home() {

    const date = new Date()

    const [ism, setIsm] = useState<string>("abdukarim")
    const [yosh, setYosh] = useState<number>(20)
    const [show, setShow] = useState<boolean>(false)
    const [nulled, setNulled] = useState<null>(null)
    const [matnRef, setMatnRef] = useState<string>()
    const [soat, setSoat] = useState<string>(date.toLocaleString())


    const clickHandlde = (event: MouseEvent<HTMLButtonElement>) => {
        alert("click ishladi")

    }


    const doubleClickHandle = (event: MouseEvent<HTMLButtonElement>) => {
        alert("double click ishladi")
    }

    const MouseDownHandle = (event: MouseEvent<HTMLButtonElement>) => {
        alert("mouse dwon ishladi")
    }

    const MouseOverHandle = (event: MouseEvent<HTMLButtonElement>) => {
        alert("mouse over ishladi")
    }

    const MouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
        alert("mouse leave ishladi")
    }


    const changeHandler = (event: ChangeEvent<HTMLInputElement> | null) => {
        setMatnRef(event?.currentTarget.value)
    }

    const submitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const userData = Object.fromEntries(form.entries())

        console.log(userData)
    }


    return (
        <div className="w-full min-h-auto h-full text-black py-10 flex-wrap text-2xl  flex items-center mx-auto rounded  px-10 "  >
            <div className="flex  gap-2 flex-col" >
                <h1>ism:{ism}</h1>
                <h1>ism:{yosh}</h1>
                <h1>ism:{show}</h1>
                <h1>null:{nulled}</h1>
                <h1>soat:  {soat}</h1>
            </div>


            <h1>Eventlar</h1>

            <div className="flex pl-7 gap-2 items-center" >
                <button className="btn" onClick={clickHandlde}  > clicked </button>

                <button className="btn" onDoubleClick={doubleClickHandle} >
                    double clicked
                </button>

                <button className="btn" onMouseDown={MouseDownHandle} >
                    Mouse Downed
                </button>

                <button className="btn" onMouseOver={MouseOverHandle} >
                    mouse Over
                </button>

                <button className="btn" onMouseLeave={MouseLeave} >
                    mouse leave
                </button>

            </div>


            <div className="flex pl-7 gap-2 pt-9 items-center mr-40" >
                <h1>{matnRef}</h1>
                <input type="text" className="border" onChange={changeHandler} />
            </div>

            <div>
                <form className="flex items-center gap-3 *:cursor-pointer *:px-4 *:py-2" onSubmit={submitHandler} >
                    <input className="border" placeholder="ism..." type="text" name="ism" />
                    <input className="border" placeholder="yosh.." type="number" min={0} name="yosh" />
                    <button className="btn" >submit event</button>
                </form>
            </div>

        </div>
    )
}

export default Home