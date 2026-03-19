import footer from '../../img/bannerFooter.svg'
import footer2 from '../../img/bannerFooter2.svg'
import footer3 from '../../img/bannerFooter3.svg'
import footer4 from '../../img/bannerFooter4.svg'
import footer5 from '../../img/bannerFooter5.svg'
import footer6 from '../../img/bannerFooter6.svg'
import footer7 from '../../img/bannerFooter7.svg'
import footer8 from '../../img/bannerFooter8.svg'
import footer9 from '../../img/bannerFooter9.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules';
function Swipers() {
    return (
        <>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                slidesPerView={5}
                className=" 320:min-w-[320px] 320:h-17.5  bg-figma-color6 mb-12.5 "
            >
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer} className=' mt-1 1600:w-470 h-full  mx-auto' /></SwiperSlide>
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer2} className=' mt-1 1600:w-470 h-full  mx-auto' /></SwiperSlide>
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer3} className=' mt-1 1600:w-470 h-full  mx-auto' /></SwiperSlide>
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer5} className=' mt-1 1600:w-470 h-full  mx-auto ' /></SwiperSlide>
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer6} className=' mt-1 1600:w-470 h-full  mx-auto ' /></SwiperSlide>
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer7} className=' mt-1 1600:w-470 h-full  mx-auto ' /></SwiperSlide>
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer8} className=' mt-1 1600:w-470 h-full  mx-auto ' /></SwiperSlide>
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer9} className=' mt-1 1600:w-470 h-full  mx-auto ' /></SwiperSlide>
                <SwiperSlide className="bg-figma-color6 text-white flex items-center justify-center " ><img src={footer4} className=' mt-1 1600:w-470 h-full ' /></SwiperSlide>

            </Swiper>
        </>
    )
}

export default Swipers