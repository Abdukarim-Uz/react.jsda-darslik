
import { useState } from "react"
import yoqtirmoq from "../../img/yoqtirmoq.svg"
import { nanoid } from "nanoid"
import bir from '../../img/bir.png'
import ikki from '../../img/ikki.png'
import uch from '../../img/uch.png'
import tort from '../../img/tort.png'
import besh from '../../img/besh.png'
import olti from '../../img/olti.png'


import KanallarMap from "../kanallarMap/KanallarMap"

function Kanallar() {

    const [dataObj, setDataObj] = useState([
        {
            id: nanoid(5),
            title: "Какие факторы будут определять цены на квартиры в будущем?",
            img: bir,
            kanal: "Аргументы и факты",
            time: "21.09.21 15:43",
            xabar: "8 часов",
            hidden: true,
            arxiv: 12,
            yangi: 5,
        },
        {
            id: nanoid(5),
            title: "Нужен юрист по трудовому праву",
            img: ikki,
            kanal: "Первый канал",
            time: "21.09.21 14:41",
            xabar: "2 дня",
            hidden: true,
            arxiv: 8,
            yangi: 4,
        },
        {
            id: nanoid(5),
            title: "Ищем компанию, сильно урезавшую расходы на фоне коронавируса",
            img: uch,
            kanal: "Forbes",
            time: "21.09.21 11:58",
            xabar: "3 дня",
            hidden: false,
            arxiv: 3,
        },
        {
            id: nanoid(5),
            title: "Ищем экспертов по HYIP. Интересуют администраторы",
            img: tort,
            kanal: "BBC Russian",
            time: "21.09.21 12:22",
            xabar: "6 дней",
            hidden: false,
            arxiv: 3,
        },
        {
            id: nanoid(5),
            title: "Предприниматели, которые перепрофилировали свою деятельность",
            img: besh,
            kanal: "TACC",
            time: "21.09.21 11:58",
            xabar: "3 дня",
            hidden: false,
            arxiv: 3,
        },
        {
            id: nanoid(5),
            title: "Топ-10 стран по производству пластика",
            img: olti,
            kanal: "Коммерсантъ",
            time: "21.09.21 10:07",
            xabar: "2 недели",
            hidden: false,
            arxiv: 3,
        },
    ])





    return (
        <div className="w-[442.5px] h-[267.5px] pt-[3.27px] border overflow-hidden border-b-slate-800 " >
            <div className="w-[42.79px] h-[9.84px] bg-figma-fon3 font-robot font-[500px] text-[5.41px] leading-[145%] tracking-[0] text-figma-color2 text-center  " >
                Топ сми
            </div>
            {
                dataObj.map((item) => (
                    <KanallarMap key={item.id} item={item} />
                ))
            }

        </div>
    )
}

export default Kanallar