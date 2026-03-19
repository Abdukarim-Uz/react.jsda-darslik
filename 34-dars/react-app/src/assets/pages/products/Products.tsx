import { useState, type SubmitEvent } from "react";

// interface

function Products() {
    // const [userData,setUserData] = useState()
    const submitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget)
        const formData = Object.fromEntries(form.entries())
        console.log(formData)
    }

    return (
        <div className="w-full min-h-auto h-full text-black py-10 text-2xl  flex items-center mx-auto rounded  px-10 "   >
            <form onSubmit={submitHandler} className="mx-auto min-w-100  w-auto *:cursor-pointer *:border *:p-2  h-30 p-5 gap-2 flex items-center  border" >
                <input type="text" placeholder="telefon raqam..." name="telefon" id="" />
                <input type="text" placeholder="parol..." name="parol" id="" />
                <button className="btn" >kirit</button>
            </form>

        </div>
    )
}

export default Products