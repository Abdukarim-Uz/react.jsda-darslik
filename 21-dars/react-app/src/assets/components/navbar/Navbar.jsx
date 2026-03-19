import { NavLink } from "react-router-dom"

import savatcha from "../../img/savatcha.svg"

function Navbar() {
    return (
        <nav className=" pt-5 pb-5  flex items-center gap-20 h-auto   " >
            <NavLink className={" font-bold  font-montserrat "} to={'/'} >
                pressfeed
            </NavLink >
            <div className="flex items-center gap-4.5" >

                <NavLink className={" font-semibold  tracking-normal   font-montserrat"} to={'/'} >
                    Журналистам
                </NavLink >

                <NavLink className={" font-montserrat  font-semibold text-3.75  tracking-normal "} to={'/'} >
                    Экспертам
                </NavLink >

                <NavLink className={" font-montserrat font-semibold text-3.75   tracking-normal  "} to={'/'} >
                    Тарифы
                </NavLink >

                <select className=" cursor-pointer font-semibold text-3.75  tracking-normal" >
                    <option value="#">Ресурсы</option>
                </select>

                <NavLink className={" border  border-yellow-500 flex rounded-xl pt-1 pl-3 pr-3 pb-1 items-center justify-center font-semibold  font-3.75  tracking-normal  "} to={'/'} >
                    Академия
                </NavLink >

                <NavLink className={"  text-figma-yellow font-semibold text-[15px] flex items-center flex-nowrap  tracking-0"} to={'/'} >
                    Сделать все за меня
                </NavLink >
            </div>
            <div className="w-auto h-auto flex items-center gap-1" >

                <NavLink className={"w-9.25 h-8"} to={'/'} >
                    <img src={savatcha} />
                </NavLink >
                <NavLink className={"w-25.75 h-7.5 flex items-center justify-center text-white font-semibold text-3 tracking-0 rounded-sm bg-figma-blue  "} >
                    Регистрация
                </NavLink>
                <NavLink className={" text-black font-semibold text-[12px] tracking-0   "} >
                    Вход
                </NavLink>
            </div>

        </nav>
    )
}

export default Navbar