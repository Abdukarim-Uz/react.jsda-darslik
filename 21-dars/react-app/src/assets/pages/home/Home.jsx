import Banner from "../../components/banner/Banner"
import shop from '../../img/shop.svg'
import surnay from '../../img/surnay.svg'
import aloqa from '../../img/aloqa.svg'
import text from '../../img/text.svg'
import kormoq from '../../img/kormoq.svg'
import news from "../../img/new.svg";
import { useState } from "react"
import { nanoid } from "nanoid"
import Map from "../../components/map/Map"

function Home() {

    const [dataObj, setDataObj] = useState([
        {
            id: nanoid(5),
            title: " Куратор поможет разработать план работы на Pressfeed под ваши задачи",
            img: shop,
            choose: true,
        },
        {
            id: nanoid(5),
            title: "Подберет запросы СМИ по вашей теме с высокой вероятностью выхода публикации",
            img: surnay,
            choose: false,
        },
        {
            id: nanoid(5),
            title: " Свяжется с вами для сбора ключевых тезисов и фактуры для будущих публикаций",
            img: aloqa,
            choose: true,
        },
        {
            id: nanoid(5),
            title: "  Напишет текст экспертного комментария или статьи и отправит журналисту",
            img: text,
            choose: false,
        },
        {
            id: nanoid(5),
            title: "Отследит статус отправленного питча и ответит на дополнительные вопросы журналиста",
            img: kormoq,
            choose: true,
        },
        {
            id: nanoid(5),
            title: " Пришлет отчет о вышедших публикациях",
            img: news,
            choose: false,
        },
    ])


    return (
        <>
            <header className="max-w-480 w-full mx-auto h-185  bg-figma-banner flex items-center pl-93.75 pr-93.75  flex-col " >
                <Banner />
            </header>
            <div className="w-292.5 h-138.5 flex items-center flex-col mx-auto gap-6 " >
                <h1 className="font-montserrat font-extrabold text-[50px] leading-15 tracking-[0.5%] text-figma-fon7 " >Как это работает: </h1>
                <div className="w-292.5 h-111 pt-6 grid grid-flow-row  grid-cols-3 grid-rows-2  " >
                    

                    {
                        dataObj.map((item, index) => (
                            <Map key={item.id} index={index} item={item} />
                        ))
                    }
                </div>


            </div >
        </>
    )
}

export default Home