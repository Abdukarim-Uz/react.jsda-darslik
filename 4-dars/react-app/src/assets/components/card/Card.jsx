import React, { useState } from 'react'

import "./card.css"

function Card() {
    const [rang,setRang] = useState("white")
    
    const [son,setSon] = useState(0);

    const [meva,setMeva] = useState("olma")

    const [url,setUrl] = useState("https://static.vecteezy.com/system/resources/thumbnails/049/855/471/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg")



    const add = () =>{
        setSon(son +1)
    };

    const minus = () =>{
        setSon(son -1)
    };


    const ozgar = ()=>{
        setMeva("banan")
    }


    const green = ()=>{
        setRang("green")
    }


    const yellow = ()=>{
        setRang("yellow")
    }

    const royalblue = ()=>{
        setRang("royalblue")
    }

    const pink = ()=>{
        setRang("pink")
    }

    const blue = ()=>{
        setRang("blue")
    }

    const mouseover = ()=>{
        setUrl("https://img.freepik.com/free-photo/fresh-green-leaf-with-dew-drop-close-up-generated-by-ai_188544-15524.jpg?semt=ais_hybrid&w=740&q=80")
    }

    const mouseleave = ()=>{
        setUrl("https://t3.ftcdn.net/jpg/15/42/32/32/360_F_1542323292_vpxI2BypeFHgSZUvuSRlJLACFn0yzp6d.jpg")
    }
    const onDoubleClick = ()=>{
        setUrl("https://static.vecteezy.com/system/resources/thumbnails/049/855/471/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-free-photo.jpg")
    }
  return (
    <div> 
        <h1>{son}</h1>

        <button onClick={minus} style={{backgroundColor:"red"}} >minus</button>
        <button onClick={add} style={{backgroundColor:"green"}} >filus</button>
        <button onDoubleClick={ozgar} style={{color:"black"}} >{meva}</button>

        <div className="color" style={{backgroundColor:rang}} >

        </div>

        <button  onClick={green} style={{backgroundColor:"green"}} >green</button>
        <button onClick={yellow} style={{backgroundColor:"yellow"}} >yellow</button>
        <button onClick={royalblue} style={{backgroundColor:"royalblue"}}>royaolblue</button>
        <button onClick={pink} style={{backgroundColor:"pink"}}>pink</button>
        <button onClick={blue} style={{backgroundColor:"blue"}}>blue</button>
        <img onDoubleClick={onDoubleClick} onMouseOver={mouseover} onMouseLeave={mouseleave} style={{cursor:"pointer"}} src={url} alt="" />

     </div>


  )
}

export default Card