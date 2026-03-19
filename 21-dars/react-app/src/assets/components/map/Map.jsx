
function Map({ item, index }) {
    return (
        <>
            {
                item.choose ?
                    <div className="w-83.25 h-41 border border-figma-border5 rounded-[20px] relative pt-7  pl-6 bg-figma-fon8"  >


                        <div className="w-22.5 h-22.5 flex items-center justify-center border  absolute top-0 right-0 translate-x-[25%] translate-y-[-40%] border-figma-border5 rounded-[100%]" >
                            <img src={item?.img} />
                        </div>
                        <p className="font-montserrat font-medium text-[18px] leading-6.5 tracking-0 flex gap-1.5 "  >
                            <p className="font-montserrat font-bold text-[18px] leading-6.5 tracking-0 text-figma-text " >{index + 1}.</p>
                            {item?.title}
                        </p>

                    </div> : <div className="w-83.25 h-41 border border-figma-border6 rounded-[20px] relative pt-7  pl-6 bg-figma-fon9"  >
                        <div className="w-22.5 h-22.5 flex items-center justify-center border  absolute top-0 right-0 translate-x-[25%] translate-y-[-40%] border-figma-border6 rounded-[100%]" >
                            <img src={item?.img} />
                        </div>
                        <p className="font-montserrat font-medium text-[18px] leading-6.5 tracking-0 flex gap-1.5 "  >
                            <p className="font-montserrat font-bold text-[18px] leading-6.5 tracking-0 text-figma-text " >{index + 1}.</p>
                            {item?.title}
                        </p>

                    </div>
            }
        </>
    )
}

export default Map