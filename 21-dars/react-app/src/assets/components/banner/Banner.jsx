
import { BrowserRouter, NavLink } from "react-router-dom"
import Frames from "../../img/Frame.svg"
import Pressfeed from "../press/pressfeed"

function Banner() {
    return (
        <div className="max-w-292.5 pt-18 w-full gap-17.75 flex items-center h-118 " >
            <div className="max-w-128.25 w-full h-82  p-0 leading-17.5 flex flex-col gap-6 " >
                <h1 className="font-montserrat text-[60px] tracking-normal font-extrabold "  >Куратор <br /> Pressfeed</h1>
                <p className="font-montserrat text-5 leading-7  tracking-0 font-medium" >Специалист по работе со СМИ, который позаботится о вашем результате и возьмет на себя работу с запросами журналистов.</p>
                <div className=" max-w-128.75 w-full  max-h-12 h-full border border-figma-border-color pb-3 pr-6 pt-4 pl-6 bg-figma-pro rounded-[28px] gap-2  flex items-center" >
                    <img src={Frames} alt="" />
                    <p className="font-montserrat flex items-center gap-1 font-semibold text-[15.8px] leading-6 tracking-0 " >Услуга доступна только владельцам
                        <NavLink className={"font-montserrat font-semibold text-4 leading-6 tracking-0 text-figma-link-color underline"} >
                            Pressfeed-PRO
                        </NavLink>
                    </p>
                </div>
            </div>
            <div className="max-w-150 w-full h-118  pt-19 pl-4 " >
                <Pressfeed />
            </div>
        </div>
    )
}

export default Banner