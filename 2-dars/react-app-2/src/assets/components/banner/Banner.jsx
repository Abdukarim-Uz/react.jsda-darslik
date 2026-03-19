
import Card from "../card/Card"
import odil from "../../images/odilbek.jpg"
import abbosbek from "../../images/abbosbek.jpg"
import abduqodir from "../../images/abduqodir.jpg"
import eldor from "../../images/eldor.jpg"
import umidjon from "../../images/umidjon.jpg"
import "./banner.css"
function Banner() {

    let kategoriya = [
        "olma",
        "banan",
        "kiwi",
        "anor",
        "ananas",
        "mandarin",
        "apelsin"
    ]

    let arr = [
        "Abdukarim",
        "aziz",
        "avaz",
        "shohrux",
        "bekshod",
        "hasan",
        "husan",
        "rahimbek"
    ]

    return (
        <div className="parent">

            <div className="product">

                <Card rasm={odil} ism={"odil ahmedov"} yosh={30} bgcolor={"red"} />
                <Card rasm={abbosbek} ism={"abbosbek fayzullayev"} yosh={31} bgcolor={"royalblue"} />
                <Card rasm={abduqodir} ism={"abduqodir husanov"} yosh={32} bgcolor={"yellow"} />
                <Card rasm={eldor} ism={"eldor shomurodov"} yosh={33} bgcolor={"green"} />
                <Card rasm={umidjon} ism={"umid ergashev"} yosh={34} bgcolor={"red"} />
            </div>

            <div className="btns">

                {arr.map((element, index) => (
                    <button key={index}>{element}</button>
                ))}

                <select >
                    {kategoriya.map((element, index) => (
                        <option key={index} value={element}>{element}</option>
                    ))}
                </select>

            </div>
        </div>
    )
}

export default Banner


