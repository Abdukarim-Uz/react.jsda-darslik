import { products } from '../../data/products'
import './product.css'
import { Link } from 'react-router-dom'


function product() {



    return (
        <div className='box' >

    

            {
                products.map((item) => (
                    <Link key={item.id} to={`/Card/${item.id}`} >

                        <div  className="product-card">
                            <img src={item.image} alt={item.title} />
                            <h4> <p> title:
                                {item.title}
                            </p></h4>

                            <button className='btn'>

                                <h4>price: {item.price}</h4>


                            </button>

                        </div>
                    </Link>
                ))
            }

        </div>
    )
}

export default product