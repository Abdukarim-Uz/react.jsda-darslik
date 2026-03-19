import { NavLink } from 'react-router-dom'
import { products } from '../../data/productdata/productdata'
import './Product.css'

function Products() {

    console.log(products)
    return (
        <div className='product' >
            {
                products.map((item) => (
                    <NavLink to={`/card/${item.id}`} key={item.id} >

                        <div className="card">
                            <img src={item.image} alt={item.title} />
                            <h1>{item.title}</h1>
                            <h1>{item.rating.rate}</h1>
                        </div>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Products