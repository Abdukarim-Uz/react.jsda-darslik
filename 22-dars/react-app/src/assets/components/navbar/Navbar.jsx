import { NavLink } from "react-router-dom"
import menu from "../../img/menu.svg"
import padarka from "../../img/padarka.svg"
import logo from '../../img/Logo.svg'
import { FaMoon, FaSun } from "react-icons/fa"
import { MdOutlineMenu } from "react-icons/md"
function Navbar({ show, setShow }) {

    return (
        <nav className=" 1600:w-400    320:flex 320:gap-11.75 960:pl-13.75 960:pr-13.75  960:w-240 items-center 960:justify-between 320:pt-6 320:pl-4 320:pr-4 600:pl-13.75 600:pr-13.75 pb-7.5 320:mx-auto   320:min-w-[320px] 320:h-18 " >
            <div className="320:w-70 320:h-7 320:gap-6.5   flex items-center p-0  " >
                {/* <img src={menu} className="320:w-6 320:mb-0 1600:hidden " /> */}
                <MdOutlineMenu className="320:w-6 block 320:mb-0 1600:hidden dark:fill-white " />
                <NavLink className={"text-figma-color2 dark:text-white 600:flex 320:hidden"} >
                    <img src={logo} />
                </NavLink>
                <img src={padarka} className="320:mt-0 w-9 1600:hidden " />
            </div>
            <NavLink className={"text-figma-color2 320:hidden dark:text-white  1600:block cursor-pointer 1600:font-montserrat hidden 1600:font-semibold 1600:text-[15px] 1600:leading-[100%] 1600:tracking-[0]"} >
                Журналистам
            </NavLink>
            <NavLink className={"text-figma-color2 320:hidden dark:text-white  1600:block cursor-pointer 1600:font-montserrat hidden 1600:font-semibold 1600:text-[15px] 1600:leading-[100%] 1600:tracking-[0]  "} >
                Экспертам
            </NavLink>
            <NavLink className={"text-figma-color2 320:hidden dark:text-white  1600:block cursor-pointer 1600:font-montserrat hidden 1600:font-semibold 1600:text-[15px] 1600:leading-[100%] 1600:tracking-[0] "} >
                Тарифы
            </NavLink>
            <select className="text-figma-color2 320:hidden dark:text-white   1600:block cursor-pointer 1600:font-montserrat hidden 1600:font-semibold 1600:text-[15px] 1600:leading-[100%] 1600:tracking-[0] " >
                <option value="#">Ресурсы</option>
            </select>
            <NavLink className={"text-figma-color2 dark:text-white  cursor-pointer 1600:w-25 1600:h-6.5 hidden 1600:rounded-[15px] 1600:flex items-center justify-center border border-figma-color11 1600:font-montserrat 1600:font-semibold 1600:text-[15px] 1600:leading-[100%] 1600:tracking-[0] "} >
                Академия
            </NavLink>
            <NavLink className={"text-figma-color12 dark:text-white  1600:block cursor-pointer  1600:rounded-[15px] hidden items-center justify-center  1600:font-montserrat 1600:font-semibold 1600:text-[13px] 1600:leading-[100%] 1600:tracking-[0] "} >
                Сделать все за меня
            </NavLink>

            <div>

            </div>
            <div className="320:w-32.75 1600:w-auto  960:justify-around 320:h-7.5 320:gap-7 flex items-center" >
                <img src={padarka} className="320:mt-0 w-9 hidden 1600:block " />
                <button className="320:w-25.75 320:h-7.5 600:w-25.75  flex items-center justify-center rounded-sm text-montserrat text-white font-semibold text-[12px] leading-[100%] tracking-0 bg-figma-color1" >
                    Регистрация
                </button>
                <NavLink className={"320:w-7 320:h-4 dark:text-white  font-montserrat font-semibold text-[12px] leading-[100%] tracking-0 text-figma-color2 "} >
                    Вход
                </NavLink>
                {
                    show ?
                        <FaSun onClick={() => setShow(!show)} className="dark:fill-white" /> :
                        <FaMoon onClick={() => setShow(!show)} className="cursor-pointer dark:fill-white " />
                }
            </div>
        </nav >
    )
}

export default Navbar