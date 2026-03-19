
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar' >
            <Link to={'/'} >
                home
            </Link>
            <Link to={'/products'} >
                products
            </Link>
            <Link to={'/userpage'} >
                users
            </Link>
            <Link to={'/savatcha'} >
                savatcha
            </Link>
            <Link to={'/login'} >
                login
            </Link>
        </div>
    )
}

export default Navbar