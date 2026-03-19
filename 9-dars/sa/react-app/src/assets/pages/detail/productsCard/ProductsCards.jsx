
import { useParams } from 'react-router-dom'
import './productscardsstyle.css'
import { products } from '../../../data/productdata/productdata'

function ProductsCards() {

    const { id } = useParams()

    const currentProducts = products.find(item => item.id === id)
    console.log(currentProducts)


    return (
        <div className='card-box' >


            <div className="child">
                <h1>{currentProducts?.title}</h1>

                <img src={currentProducts?.image} alt={currentProducts?.title} />
            </div>
            <div className="child_two">
                <div className="child_two_one">
                    <div className="price">
                        <h1 style={{ color: "#62a6ffff" }} >{currentProducts?.price}$</h1>

                        <label htmlFor="kategory">
                            <p>Kategoriya</p>
                            <h1>{currentProducts?.category}</h1>
                        </label>
                    </div>
                    <div className="images">
                        <img src={currentProducts?.image} alt={currentProducts?.title} />
                        <img src={currentProducts?.image} alt={currentProducts?.title} />
                        <img src={currentProducts?.image} alt={currentProducts?.title} />
                        <img src={currentProducts?.image} alt={currentProducts?.title} />
                    </div>
                </div>
                <div className="child_two_two">
                    <div className="text">
                        <p>{currentProducts?.description}</p>
                    </div>

                    <div className="btn_two">
                        <button>sotib olish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCards