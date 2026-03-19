import line from '../../components/img/line.svg'

function Map({ item, index }) {
    return (
        <div className="w-64   p-1  border h-30 gap-2   flex items-start relative flex-col" >
            <img src={line} className={`absolute ${index === 3 ? "hidden" : "inline-block"} top-4 translate-x-[5%] right-0`} />
            <span className="w-10 h-10 bg-color3 text-white flex items-center justify-center rounded-full" >{index + 1}</span>
            <p className="font-font1 ml-2 text-color1 font-normal text-[17px] leading-6" >{item.title}</p>
        </div>
    )
}

export default Map