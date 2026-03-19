import { useParams } from "react-router-dom";
import "./detail.css";
import { FaStar } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

function Detail({ newBasket, numberArray, setNumberArray, setNewBasket, }) {
    const { id } = useParams();
    const [copyData, setCopyData] = useState([]);
    const [item, setItem] = useState();

    const sonRef = useRef(0)

    async function getProducts() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setCopyData(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        const findItem = copyData.find(item => item.id === +id)
        setItem(findItem)
    }, [copyData, id])

    const gotoBasket = (item) => {
        const someItem = newBasket.some(element => element.id === item.id)
        if (someItem) {
            toast.warn("siz bu mahsulotni qo'shganszi")
        } else {

            setNewBasket([...newBasket, item])
            toast.success("mahsulot qo'shildi !")
            setNumberArray([...numberArray, sonRef.current.value])
            console.log(numberArray)
        }

    }



    return (
        <>
            {item && (
                <div className="detail">
                    <div className="detail-left">
                        <img src={item.image} alt={item.title} />
                    </div>

                    <div className="detail-rigth">
                        <div className="title">
                            <label htmlFor="title">
                                title
                                <h3 id="title">{item.title}</h3>
                            </label>
                        </div>

                        <div className="price">
                            <label htmlFor="price">
                                price
                                <h3 id="price">{item.price}$</h3>
                            </label>
                        </div>

                        <div className="description">
                            <label htmlFor="description">
                                description
                                <h4 id="description">{item.description}</h4>
                            </label>
                        </div>

                        <div className="category">
                            <label htmlFor="category">
                                category
                                <h3 id="category">{item.category}</h3>
                            </label>
                        </div>

                        <div className="rating">
                            <label htmlFor="rate">
                                rate
                                <h3 id="rate">
                                    {item.rating.rate} <FaStar fill="yellow" />
                                </h3>
                            </label>

                            <label htmlFor="count">
                                count
                                <h3 id="count">{item.rating.count}</h3>
                            </label>
                        </div>

                        <div className="product-count">
                            <input type="number" ref={sonRef} min={1} defaultValue={1} />
                        </div>

                        <div className="shop-btn">
                            <button onClick={() => gotoBasket(item)} >
                                <FaShop /> <h5>Shop</h5>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Detail;
