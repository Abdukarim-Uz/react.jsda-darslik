import { nanoid } from "nanoid";
import kurtka from '../images/kurtka.png'
import sumka from '../images/sumka.png'
import kalonka from '../images/kalonka.png'
import javon from '../images/javon.png'

export const products = [
    {
        id: nanoid(5),
        title: 'The north coat',
        newPrice: 260,
        price: 360,
        rate: 65,
        image: kurtka,
        change: true
    },
    {
        id: nanoid(5),
        title: 'Gucci duffle bag',
        newPrice: 960,
        price: 1160,
        rate: 65,
        image: sumka,
        change: false
    },
    {
        id: nanoid(5),
        title: 'RGB liquid CPU Cooler',
        newPrice: 160,
        price: 170,
        rate: 65,
        image: kalonka,
        change: false
    },
    {
        id: nanoid(5),
        title: 'Small BookSelf',
        newPrice: 360,
        price: null,
        rate: 65,
        image: javon,
        change: true
    },

]