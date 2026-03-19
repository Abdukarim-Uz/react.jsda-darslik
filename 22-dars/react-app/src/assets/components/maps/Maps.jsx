


function Maps({ item, index }) {
    return (
        <div className={`320:w-72 320:h-40 960:w-89 960:h-47 600:w-122.5  ${index === 3 || index === 4 || index === 5 ? "1600:ml-45" : ""}  flex items-end`} >
            {
                item.choose ?
                    <div className="320:w-66.25 320:h-38 960:w-89 960:h-47  600:w-122.5 relative rounded-[20px] bg-figma-color7 border 320:pt-5 320:pl-4  border-figma-color8" >
                        <div className="absolute border 960:translate-x-[320%] 600:translate-x-[460%] 600:translate-y-[-60%] translate-x-[200%] bg-white translate-y-[-48%]  w-22.5 h-22.5 rounded-full flex items-center justify-center border-figma-color8  " >
                            <img src={item.img} />
                        </div>
                        <div className="320:w-45 320:h-24  "  >

                            <p className="600:w-91  font-montserrat 960:w-65.75 font-bold 960:text-[18px] 960:leading-6.5  text-[16px] 600:text-[18px] 600:leading-6.5  " >  <span className="font-montserrat 600:text-[18px] 600:leading-6.5 font-medium960:text-[18px] 960:leading-6.5  text-[16px] leading-6  tracking-0 text-figma-color1" >{index + 1}.</span>
                                {item.title}
                            </p>
                        </div>
                    </div> :

                    <div className="320:w-66.25 320:h-38 600:w-122.5  960:w-89 960:h-47   relative rounded-[20px] bg-figma-color9 border 320:pt-5 320:pl-4  border-figma-color10" >
                        <div className="absolute border 960:translate-x-[320%] translate-x-[200%] 600:translate-x-[460%] 600:translate-y-[-60%] bg-white translate-y-[-48%]  w-22.5 h-22.5 rounded-full flex items-center justify-center border-figma-color10  " >
                            <img src={item.img} />
                        </div>
                        <div className="320:w-45 320:h-24  "  >

                            <p className="600:w-91  font-montserrat font-bold 960:w-65.75 960:text-[18px] 960:leading-6.5  text-[16px] 600:text-[18px] 600:leading-6.5  " >  <span className="font-montserrat 600:text-[18px] 600:leading-6.5  font-medium960:text-[18px] 960:leading-6.5  text-[16px] leading-6  tracking-0 text-figma-color1" >{index + 1}.</span>
                                {item.title}
                            </p>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Maps