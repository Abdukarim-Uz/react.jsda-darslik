import yoqtirmoq from "../../img/yoqtirmoq.svg"

function Search() {
    return (
        <div className="w-[442.83px] h-[41.09px] flex items-start flex-col gap-[5.35px] " >
            <div className="w-110.75 h-4  bg-figma-fon2  border-[0.49px] rounded-[24.59px] cursor-pointer  flex items-center justify-around  border-figma-border2 " >
                <input type="text" placeholder="Поиск среди всех запросов" className="border-[0.49px] w-105 pl-[8.85px] pt-0  h-4  cursor-pointer  rounded-[24.59px] font-robot  font-[400px] text-[7.87px] leading-[11.8px] tracking-[0px] text-figma-placeholder border-none " /><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2270_7100)">
                        <path d="M6.47694 6.38869L5.38284 5.30262C5.80753 4.77269 6.0132 4.10006 5.95755 3.42303C5.90191 2.74601 5.58918 2.11605 5.08367 1.66269C4.57815 1.20933 3.91829 0.967033 3.23975 0.985614C2.5612 1.0042 1.91556 1.28225 1.43558 1.76259C0.955603 2.24294 0.677765 2.88907 0.659197 3.56812C0.64063 4.24718 0.882745 4.90755 1.33576 5.41344C1.78877 5.91934 2.41825 6.23231 3.09476 6.288C3.77127 6.34368 4.4434 6.13786 4.97292 5.71285L6.05817 6.79892C6.08559 6.82658 6.1182 6.84854 6.15414 6.86352C6.19008 6.8785 6.22862 6.88622 6.26755 6.88622C6.30649 6.88622 6.34503 6.8785 6.38097 6.86352C6.4169 6.84854 6.44952 6.82658 6.47694 6.79892C6.53009 6.74389 6.5598 6.67034 6.5598 6.5938C6.5598 6.51727 6.53009 6.44372 6.47694 6.38869ZM3.31851 5.71285C2.91022 5.71285 2.5111 5.59168 2.17163 5.36468C1.83215 5.13767 1.56756 4.81503 1.41131 4.43753C1.25507 4.06004 1.21419 3.64465 1.29384 3.24391C1.37349 2.84316 1.5701 2.47505 1.8588 2.18613C2.14751 1.89721 2.51534 1.70045 2.91578 1.62074C3.31622 1.54103 3.73129 1.58194 4.10849 1.7383C4.4857 1.89467 4.80811 2.15946 5.03494 2.49919C5.26177 2.83893 5.38284 3.23835 5.38284 3.64695C5.38284 4.19486 5.16535 4.72033 4.77821 5.10776C4.39107 5.49519 3.866 5.71285 3.31851 5.71285Z" fill="#8C8C8C" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2270_7100">
                            <rect width="7.8688" height="7.8688" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="w-[233.46px] mb-[6.41px] h-[15.74px] flex items-center gap-[5.14px]" >
                <div className="w-[67.88px] h-[15.74px] flex items-center gap-[4.91px]  pl-[5.9px] font-robot font-[400px] text-[5.9px] leading-[9.84px] tracking-0 text-figma-moy border rounded-[18.2px]  border-figma-border2" >Мои подписки <p className="text-figma-border2" >|</p> <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.94712 3.93565C2.88976 3.93578 2.83418 3.91292 2.79001 3.87105L1.31719 2.46663C1.26706 2.41895 1.23554 2.35044 1.22955 2.27617C1.22357 2.2019 1.24362 2.12795 1.28528 2.07059C1.32695 2.01322 1.38682 1.97715 1.45173 1.9703C1.51664 1.96346 1.58127 1.98639 1.63139 2.03407L2.94712 3.29243L4.26284 2.07901C4.28795 2.05568 4.31684 2.03826 4.34785 2.02774C4.37886 2.01723 4.41138 2.01383 4.44355 2.01775C4.47571 2.02166 4.50688 2.03281 4.53527 2.05056C4.56365 2.0683 4.58869 2.09229 4.60895 2.12114C4.63143 2.15003 4.64846 2.18391 4.65896 2.22067C4.66946 2.25743 4.67322 2.29627 4.66999 2.33477C4.66677 2.37327 4.65663 2.41059 4.64021 2.4444C4.62379 2.47821 4.60145 2.50777 4.57458 2.53123L3.10176 3.8879C3.05633 3.92316 3.00188 3.93997 2.94712 3.93565Z" fill="#595959" />
                </svg>
                </div>
                <div className="w-[28.8px] h-[15.74px] rounded-[19.67px] border border-figma-border2 font-robot font-[400px] text-[5.9px] leading-[9.84px] tracking-0 pt-[1.95px] pl-[5.9px] text-figma-moy" >
                    Темы
                </div>
                <div className="w-[51.94px] h-[15.74px] border rounded-[19.67px] border-figma-border2 pt-[1.95px] pl-[5.9px] font-robot  font-[400px] text-[5.9px] leading-[9.84px] tracking-0 text-figma-border-color " >
                    Тип запросов
                </div>
                <div className="w-[69.42px] h-[15.74px] flex items-center gap-[2.95px] border border-figma-border2 rounded-[19.67px] font-robot font-[400px] text-[5.9px] leading-[9.84px] tracking-0 pt-0 pl-[5.9px] " >
                    <img src={yoqtirmoq} />
                    Рекомендуемые
                </div>
            </div>

        </div>
    )
}

export default Search