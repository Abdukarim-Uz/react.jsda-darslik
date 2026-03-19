import { nanoid } from "nanoid"
import bir from '../../img/bir.svg'
import ikki from '../../img/ikki.svg'
import uch from '../../img/uch.svg'
import tort from '../../img/tort.svg'
import besh from '../../img/besh.svg'
import olti from '../../img/olti.svg'
import Maps from "../maps/Maps"
import vector from '../../img/Vector.svg'
function Ish() {
    const dataObj = [
        {
            id: nanoid(5),
            title: "Куратор поможет разработать план работы на Pressfeed под ваши задачи",
            choose: true,
            img: bir
        },
        {
            id: nanoid(5),
            title: "Подберет запросы СМИ по вашей теме с высокой вероятностью выхода публикации",
            choose: false,
            img: ikki
        },
        {
            id: nanoid(5),
            title: "Свяжется с вами для сбора ключевых тезисов и фактуры для будущих публикаций",
            choose: true,
            img: uch
        },
        {
            id: nanoid(5),
            title: "Напишет текст экспертного комментария или статьи и отправит журналисту",
            choose: false,
            img: tort
        },
        {
            id: nanoid(5),
            title: "Отследит статус отправленного питча и ответит на дополнительные вопросы журналиста",
            choose: true,
            img: besh
        },
        {
            id: nanoid(5),
            title: "Пришлет отчет о вышедших публикациях",
            choose: false,
            img: olti
        },
    ]
    return (
        <div className="320:w-72 320:h-284.5 600:w-auto 960:w-212.5 960:h-175 relative 960:p-10 960:grid-cols-2   grid  960:grid-rows-4   1600:w-360 1600:h-138.5 1600:grid-cols-3  1600:gap-y-65 960:gap-x-10 960:gap-y-55 320:gap-3 " >
            <img src={vector} className="1600:absolute top-35 left-50  960:hidden 600:hidden 320:hidden  " />
            {
                dataObj.map((item, index) => (
                    <Maps key={item.id} item={item} index={index} />
                ))
            }



        </div>

    )
}

export default Ish