import { NavLink } from "react-router-dom"
import yonalish from "../../img/yonaltirish.svg"
import PreesFeed from "../preesFeed/PreesFeed"

function Banner() {
    return (
        <div className="320:w-[320px] cursor-pointer 960:pt-2 320:h-173.5 960:w-240 960:h-255.5 600:w-150 600:h-245 600:pt-25 320:pt-12.5 320:pl-4 320:pr-4 flex 320:gap-5 z-10 items-center 320:justify-center 320:flex-col 1600:flex-row 1600:justify-between 1600:pl-13.75 1600:pr-13.75 1600:h-185  1600:w-400 " >
            <div className="600:w-122.5 600:h-75.5  960:w-212.5 960:gap-7 960:h-57.5    320:w-72 320:h-56  320:flex 320:items-center 320:justify-center 320:flex-col 320:gap-3 1600:h-100 1600:w-140" >
                <h1 className="font-montserrat 960:text-[60px] 960:leading-17.5 font-extrabold  600:text-[50px] 600:leading-15  320:text-center text-[30px] leading-10 tracking-[0.5%] text-figma-color2  1600:text-[80px] 1600:leading-17.5 dark:text-white " >Куратор Pressfeed</h1>
                <p className="font-montserrat 600:w-122.5 960:w-212.5 960:h-14 600:h-19.5  font-medium 600:text-[18px] 600:leading-6.5  320:text-center text-[16px] leading-6 tracking-[0.5%] text-figma-color4 1600:text-[20px] 1600:leading-7 1600:w-128.75 1600:h-21 dark:text-white " >Специалист по работе со СМИ, который позаботится о вашем результате и возьмет на себя  работу с запросами  журналистов.</p>
                <div className="600:w-122.5 hidden  600:h-12 600:gap-1  960:w-128.75 960:mb-20 border  320:w-72 320:h-16  1600:flex items-center 600:pt-3 600:pl-[11.5px] 600:pr-[11.5px]  320:pt-3 320:pl-8 320:gap-px 320:justify-center  rounded-[28px]  bg-figma-color5 1600:w-130 1600:h-12 1600:pl-6 1600:pr-6 1600:pt-3 1600:pb-3 " >
                    <img src={yonalish} />
                    <p className="font-montserrat font-semibold 600:text-[16px] 600:leading-6 text-[14px]  leading-5 tracking-[0] 320:flex 320:items-center " > Услуга доступна только владельцам
                        Pressfeed-PRO
                        <NavLink className={"font-montserrat font-semibold text-[14px]  leading-5 tracking-0 underline flex items-center   text-figma-color6"} >
                        </NavLink>
                    </p>
                </div>
            </div>
            <div  className="600:w-122.5 600:h-12 600:gap-1 1600:hidden border 960:w-128.75 960:mb-20   320:w-72 320:h-16 justify-center flex items-start 600:pt-3 600:pl-[11.5px] 600:pr-[11.5px]  320:pt-3 320:pl-8 320:gap-px 320:justify-center  rounded-[28px] bg-figma-color5 " >
                <img src={yonalish} />
                <p className="font-montserrat font-semibold 600:text-[16px] 600:leading-6 text-[14px]  leading-5 tracking-[0] 320:flex 320:items-center " > Услуга доступна только владельцам
                    Pressfeed-PRO
                    <NavLink className={"font-montserrat font-semibold text-[14px]  leading-5 tracking-0 underline flex items-center   text-figma-color6"} >
                    </NavLink>
                </p>
            </div>
            <div className="  600:w-122.5 600:h-96.5  960:w-150   320:w-72 320:h-56.5 flex items-center  1600:w-200 1600:h-118 1600:justify-center "  >
                <PreesFeed />
            </div>
        </div>
    )
}

export default Banner