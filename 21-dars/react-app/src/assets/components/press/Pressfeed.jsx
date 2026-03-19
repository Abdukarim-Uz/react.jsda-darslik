import { Route, Routes } from "react-router-dom"
import PressNavbar from "../pressNavbar/PressNavbar"


import { lazy } from "react"

const Zapros = lazy(() => import("../../pages/zapros/Zapros"))

const Kontakt = lazy(() => import("../../pages/kontakt/Kontakt"))

const Frilancer = lazy(() => import("../../pages/frilanser/Frilancer"))

const CMI = lazy(() => import("../../pages/cmi/CMI"))

const Reliz = lazy(() => import("../../pages/reliz/Reliz"))

const Chat = lazy(() => import("../../pages/chat/Chat"))

const Jurnal = lazy(() => import("../../pages/jurnal/Jurnal"))

const Akademiya = lazy(() => import("../../pages/akademiya/Akademiya"))

const PressHome = lazy(() => import("../../pages/pressHome/PressHome"))



function Pressfeed() {
    return (
        <div className="w-117.5 min-h-77.5 h-auto border border-amber-500 flex items-center flex-col drop-shadow-xxl rounded-2xl " >
            <PressNavbar />
            <Routes>
                <Route path="/press-home" element={<PressHome />} />
                <Route path="/zapros" element={<Zapros />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/frilancer" element={<Frilancer />} />
                <Route path="/cmi" element={<CMI />} />
                <Route path="/reliz" element={<Reliz />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/jurnal" element={<Jurnal />} />
                <Route path="/akademiya" element={<Akademiya />} />
            </Routes>
        </div>
    )
}

export default Pressfeed