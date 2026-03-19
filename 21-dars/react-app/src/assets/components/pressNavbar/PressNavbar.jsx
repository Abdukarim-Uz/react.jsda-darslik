import { NavLink } from "react-router-dom"

function PressNavbar() {
    return (
        <nav className="max-w-117.5 w-auto h-8.5 bg-black rounded-t-2xl flex items-center  pl-[15.1px]  gap-[30.59px] " >
            <NavLink to={'/press-home'} className={"text-white font-[500px] text-[11px] leading-[100%] tracking-0 "} >
                pressfeed
            </NavLink>
            <div className="min-w-63.5 w-auto text-white  h-auto flex items-center gap-2" >
                <NavLink to={'/zapros'} className={"actived font-robot font-[500px] text-[9px] leading-[100%] tracking-0"} >
                    Запросы
                </NavLink>
                <NavLink to={'/kontakt'} className={" actived font-robot font-[500px] text-[9px] leading-[100%] tracking-0"} >
                    Контакты
                </NavLink>
                <NavLink to={'/frilancer'} className={" actived font-robot font-[500px] text-[9px] leading-[100%] tracking-0"} >
                    Фриланс
                </NavLink>
                <NavLink to={'/cmi'} className={" actived font-robot font-[500px] text-[9px] leading-[100%] tracking-0"} >
                    СМИ
                </NavLink>
                <NavLink to={'/reliz'} className={" actived font-robot font-[500px] text-[9px] leading-[100%] tracking-0"} >
                    Релизы
                </NavLink>
                <NavLink to={'/chat'} className={" actived font-robot font-[500px] text-[9px] leading-[100%] tracking-0"} >
                    Чаты
                </NavLink>
                <NavLink to={'/jurnal'} className={" actived font-robot font-[500px] text-[9px] leading-[100%] tracking-0"} >
                    Журнал
                </NavLink>
            </div>
            <span className="w-[73.52px] h-full    rounded-tr-2xl bg-opacity-color relative flex items-center" >

                <div className="absolute top-2 right-2 bg-green-color flex items-center justify-center  w-[12.5px] h-[6.25px] rounded-t-[1.76px] rounded-br-[1.76px] " >
                    <p className="font-robot font-[500px] text-[5.27px] leading-[145%] tracking-[0%] text-white " >NEW</p>
                </div>

                <NavLink  to={'/akademiya'} className={" actived text-white font-robot font-[4  00px] text-[10px]  leading-[100%] tracking-normal"} >
                    Академия
                </NavLink>
            </span>
        </nav>
    )
}

export default PressNavbar