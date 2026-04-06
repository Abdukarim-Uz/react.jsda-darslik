import { useState, type ChangeEvent } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

function Navbar() {
    const [til, setTil] = useState<string>("")
    const { t, i18n } = useTranslation()


    const tilniBerish = (event: ChangeEvent<HTMLSelectElement>) => {
        setTil(event.currentTarget.value)
        i18n.changeLanguage(event.currentTarget.value)
    }

    return (
        <nav className="w-[90%] flex items-center justify-between gap-4 px-10 text-[30px] mx-auto mb-5 h-20 rounded-sm bg-green-600 " >

            <div className="flex gap-3 " >


                <NavLink to={'/'} className={"flex-2"} >
                    {t("nav.asosiy")}
                </NavLink>
                <NavLink to={'/products'} className={"flex-2"} >
                    <p>
                        {t("nav.mahsulot")}
                    </p>
                </NavLink>
            </div>
            <div className="flex gap-2 items-center" >
                <h1>{t("nav.kirish")}</h1>
                <select value={til} onChange={tilniBerish} name="tillaruzb" className="text-black bg-white rounded-sm  outline-0  " >

                    <option value="uz" >uz</option >
                    <option value="ru" >ru</option >
                    <option value="en" >en</option >

                </select>
            </div>
        </nav>
    )
}

export default Navbar


