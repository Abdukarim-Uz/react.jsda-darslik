import banner from '../../img/banner.svg'
import banner2 from '../../img/banner2.svg'
import banner3 from '../../img/banner3.svg'
import banner4 from '../../img/banner4.svg'
import banner5 from '../../img/banner5.svg'
import banner6 from '../../img/banner6.svg'
import banner7 from '../../img/banner7.svg'
function PreesFeed() {
    // 600:w-[383.83px] 600:h-[253.17px]
    return (
        <div className="       600:w-full 600:h-full    320:w-[225.6px] 320:h-[148.8px] relative flex items-center 600:justify-center 320:flex-col 1600:scale-130" >
            <img src={banner} className=' 600:w-[383.83px] 960:w-117.5 960:h-77.5 600:h-[253.17px]  ' />
            <img src={banner2} className='absolute 960:w-113.5 960:h-113.5 600:w-[370.77px] 600:h-[370.77px]   600:translate-x-[14%] 600:translate-y-[1%] -z-10 translate-x-[28%] translate-y-[-10%] ' />
            <img src={banner3} className='absolute 960:w-11.5 960:h-11.5  harakat 600:translate-x-[540%] 600:translate-y-[-280%] 600:w-[37.57px] 600:h-[37.57px]  translate-x-[530%]  ' />
            <img src={banner4} className='absolute 960:w-8.25 960:h-8.25   harakat 600:translate-x-[780%] 600:translate-y-[63%] 600:w-[26.95px] 600:h-[26.95px] translate-x-[670%] translate-y-[333%] ' />
            <img src={banner5} className='absolute 960:w-14 960:h-14  harakat1 600:translate-x-[460%] 600:translate-y-[220%]  600:w-[45.73px] 600:h-[45.73px]  translate-x-[490%] translate-y-[390%]' />
            <img src={banner6} className='absolute 960:w-9.75 960:h-9.75 harakat2 600:translate-x-[300%] 600:translate-y-[500%] 600:w-[31.85px] 600:h-[31.85px]  translate-x-[220%] translate-y-[669%]' />
            <img src={banner7} className='absolute 960:w-14 960:h-14 harakat3 600:translate-x-[-105%] 600:translate-y-[350%] 600:w-[45.73px] 600:h-[45.73px] translate-x-[-5%] translate-y-[490%]' />
        </div>
    )
}

export default PreesFeed