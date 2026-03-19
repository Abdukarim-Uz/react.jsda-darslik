import { useState } from "react"
import Banner from "./assets/components/banner/Banner"
import Ish from "./assets/components/ish/Ish"
import Navbar from "./assets/components/navbar/Navbar"
import Swipers from "./assets/components/swiper/Swipers"

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className={`320:w-[320px] ${show ? "dark":  ''} dark:bg-slate-900 960:w-240 600:w-150 ml-auto 1600:w-full mr-auto mt-0`} >
      <div className="w-full h-auto bg-white flex 1600:w-full dark:bg-slate-800 items-center justify-center" >
        <Navbar show={show} setShow={setShow} />
      </div>
      <div className="960:w-240 600:w-150 960:h-255.5 1600:w-full 1600:h-185  320:w- dark:bg-slate-900   mx-auto h-auto flex items-center justify-center bg-figma-color3" >
        <Banner />
      </div>
      <Swipers />
      <h1 className="font-montserrat w-full 960:text-[50px] 1600:w-full dark:text-white 960:leading-15 960:tracking-[0.5%]  mx-auto 600:w-150 font-extrabold text-[20px]  600:text-[40px] 600:leading-12.5 leading-6.5 tracking-[0.5%] text-figma-color2 text-center mb-5 1600:text-[50px] 1600:leading-15 " >Как это работает: </h1>

      <div className=" 960:w-240 1600:h-138.5 p-3 600:w-150 1600:w-400  mx-auto dark:bg-slate-800   flex items-center justify-center bg-white" >
        <Ish />
      </div>
    </div>
  )
}

export default App