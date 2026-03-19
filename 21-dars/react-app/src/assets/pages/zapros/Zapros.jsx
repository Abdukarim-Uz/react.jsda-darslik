import Kanallar from "../../components/kanallar/Kanallar"
import Search from "../../components/search/Search"

function Zapros() {
    return (
        <div className="w-full h-68.5 pl-[13.17px] pt-0.75 border border-b-neutral-900 bg-figma-fon2  rounded-b-2xl " >
            <div className="flex items-center gap-[13.17px] mb-[4.25px]" ><button className="w-[57.08px] h-[10.54px] rounded-[1.76px] flex items-center justify-center pb-[2.63px] pt-[2.64px] gap-[1.32px]  bg-figma-button-color font-robot font-[500px] text-[5.27px] leading-[8.78px]  tracking-0 text-white cursor-pointer " > <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2270_7072)">
                    <path d="M2.48648 0.785278H2.79521C2.82265 0.785278 2.83637 0.799 2.83637 0.826443V4.44891C2.83637 4.47635 2.82265 4.49007 2.79521 4.49007H2.48648C2.45903 4.49007 2.44531 4.47635 2.44531 4.44891V0.826443C2.44531 0.799 2.45903 0.785278 2.48648 0.785278Z" fill="white" />
                    <path d="M0.905422 2.43884H4.36323C4.39067 2.43884 4.40439 2.45256 4.40439 2.48001V2.78874C4.40439 2.81618 4.39067 2.8299 4.36323 2.8299H0.905422C0.877979 2.8299 0.864258 2.81618 0.864258 2.78874V2.48001C0.864258 2.45256 0.877979 2.43884 0.905422 2.43884Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_2270_7072">
                        <rect width="5.26904" height="5.26904" fill="white" />
                    </clipPath>
                </defs>
            </svg>
                Добавить запрос </button>
                <p className="max-w-[59.28px] w-full max-h-[9.66px] h-full  flex items-center gap-[1.32px] font-robot font-[500px] text-[6.15px] leading-[9.66px] tracking-0" >Все запросы <span className="w-[7.46px] h-[7.03px] font-robot font-[400px] text-[4.39px] leading-[7.03px] tracking-0 text-figma-xabar-color" >170</span> <span className="max-w-[12.29px] w-full max-h-[7.03px] h-full rounded-[5.11px]   pl-[2.2px] pr-[2.2px] flex items-center gap-[3.19px] bg-figma-fon text-figma-xabar-color font-robot font-[500px] text-[4.39px] leading-[7.03px] tracking-[0] " >279</span> </p>
                <p className="max-w-[47.42px] w-full max-h-[9.66px] h-full flex items-center gap-[1.32px] font-robot font-[400px] text-[6.15px] leading-[9.66px] tracking-[0px] text-figma-xabar2 " >Мои запросы <span className="w-[7.03px] h-[7.03px] rounded-[5.11px] pr-[2.2px] pl-[2.2px]  bg-figma-fon text-figma-xabar-color z-30 font-robot font-[500px] text-[4.39px] leading-[7.03px] tracking-[0px]   " >1</span> </p>
                <p className="max-w-[43.47px] w-full max-h-[9.66px] h-full flex items-center gap-[1.32px]  font-robot  font-[400px] text-[6.15px] leading-[9.66px] tracking-[0px] text-figma-xabar2" >Мои ответы <span className="w-[7.03px] h-[7.03px] rounded-[5.11px] pr-[2.2px] pl-[2.2px]  bg-figma-fon text-figma-xabar-color z-30 font-robot font-[500px] text-[4.39px] leading-[7.03px] tracking-[0px]   " >1</span></p>
            </div>
            <Search />
            <Kanallar />
        </div>
    )
}

export default Zapros