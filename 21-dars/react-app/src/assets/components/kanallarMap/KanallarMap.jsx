
import rss from '../../img/rss.svg'
import yoqtirmoq1 from '../../img/favorite.svg'
import icon from '../../img/icon.svg'

function KanallarMap({ item }) {
    return (
        <div className="w-[435.24px] h-[38.36px] relative border border-amber-300 flex items-start pt-[5.47px] pl-[10.82px]   " >
            <div className="w-[101.8px] h-[6.89px] flex absolute bottom-1.25 left-8.5 items-center gap-[1.48px] " >
                <img src={item?.bir} />
                <p className="font-robot font-medium text-[5.9px] leading-[100%] tracking-[0px] text-figma-fon5 " >{item?.kanal}</p>
                <p className="font-robot font-medium text-[4.92px] leading-[100%] tracking-[0px] text-figma-fon6 " >{item?.time}</p>

            </div>
            <div className="rounded-circle w-[15.74px] h-[15.74] flex items-center justify-center mr-[8.49px] " ><img src={item?.img} alt={item?.kanal} /></div>
            <div className='w-[245.67px] min-h-[10.62px] h-auto flex-nowrap ' >

                <p className="font-robot font-[500px] text-[7.87px] leading-[10.33px] tracking-[0px] mr-[27.89px] " >{item?.title}</p>
            </div>
            <span className="w-[25.57px] h-[8.85px] rounded-[19.18px] border-[0.49px]  border-figma-border3 flex items-center justify-center font-robot font-[500px] text-[4.92px] leading-[3.38px] tracking-0  mr-[19.27px] " >
                {item?.xabar}
            </span>
            <div className='w-[19.18px] h-[8.85px] mr-[18.2px] flex items-center gap-px ' > 

                <div className="w-[8.85px] h-[8.85px] rounded-[100%] flex items-center justify-center font-robot font-medium  text-[5.41px] leading-[8.85px] tracking-[0px]  text-white bg-figma-fon3  " >
                    {item?.arxiv}
                </div>
                {
                    item.hidden ?
                        <div className="w-[8.85px] h-[8.85px] rounded-[100%] flex items-center justify-center font-robot font-medium  text-[5.41px] leading-[8.85px] tracking-[0px] text-white bg-figma-fon4 " >
                            {item?.yangi}
                        </div> : null
                }
            </div>
            <div className="w-[40.33px] h-[11.81px] flex ite justify-center  " >
                <img src={rss} />
                <img src={yoqtirmoq1} />
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.20258 3.54684C9.15686 3.50075 9.10246 3.46416 9.04253 3.43919C8.9826 3.41422 8.91832 3.40137 8.8534 3.40137C8.78848 3.40137 8.72419 3.41422 8.66426 3.43919C8.60433 3.46416 8.54994 3.50075 8.50422 3.54684L4.84031 7.21567L3.30098 5.67142C3.25351 5.62556 3.19747 5.58951 3.13607 5.56531C3.07466 5.54111 3.0091 5.52924 2.94311 5.53038C2.87712 5.53152 2.812 5.54565 2.75147 5.57196C2.69094 5.59827 2.63618 5.63624 2.59033 5.68371C2.54447 5.73118 2.50842 5.78722 2.48422 5.84862C2.46002 5.91002 2.44815 5.97559 2.44929 6.04158C2.45044 6.10757 2.46456 6.17269 2.49087 6.23322C2.51718 6.29375 2.55515 6.34851 2.60262 6.39436L4.49113 8.28287C4.53685 8.32897 4.59125 8.36556 4.65118 8.39052C4.71111 8.41549 4.77539 8.42835 4.84031 8.42835C4.90524 8.42835 4.96952 8.41549 5.02945 8.39052C5.08938 8.36556 5.14377 8.32897 5.18949 8.28287L9.20258 4.26979C9.2525 4.22373 9.29234 4.16784 9.31959 4.10563C9.34683 4.04341 9.3609 3.97623 9.3609 3.90831C9.3609 3.8404 9.34683 3.77321 9.31959 3.711C9.29234 3.64879 9.2525 3.59289 9.20258 3.54684Z" fill="#D9D9D9" />
                </svg>

            </div>
        </div>
    )
}

export default KanallarMap