import { NavLink, useNavigate } from 'react-router-dom'
import './navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdSearch } from 'react-icons/io'
import { MdOutlinePerson } from 'react-icons/md'
import { FaHeart } from 'react-icons/fa'
import { FaBasketShopping } from 'react-icons/fa6'

function Navbar({ counterShop, setHiddenbtn, setHiddenbutton }) {
    const Navigate = useNavigate()

    const shoWbtn = () => {
        setHiddenbutton(false)
        setHiddenbtn(false)
    }
    const hiddebtn = () => {
        setHiddenbtn(false)
        setHiddenbutton(false)
    }

    const toKatalogPage = () => {
        Navigate('/katalog')
    }
    return (
        <div className='navbar' >
            <div className="box-hover">

                <NavLink to={'/'} onClick={hiddebtn}  >
                    home
                </NavLink>
            </div>
            <div className="search">
                <button onClick={toKatalogPage} > <RxHamburgerMenu className='menu' /> katalog</button>
                <div className="search-input">

                    <input type="search" placeholder='mahsulotlar va turkumlarni izlash' />
                    <div className="icon-search">

                        <IoMdSearch className='search-icon' />
                    </div>
                </div>
            </div>
            <div className="box-hover">
                <MdOutlinePerson className='icons' />
                <NavLink to={'/kirish'} onClick={hiddebtn} >
                    kiritish
                </NavLink>
            </div>
            <div className="box-hover"  >
                <FaHeart className='heart' />
                <NavLink to={'/saralangan'} onClick={shoWbtn} >
                    saralangan
                </NavLink>
            </div>
            <div className="box-hover ">
                <FaBasketShopping className='icons' />
                <NavLink to={'/savatcha'} onClick={hiddebtn}>
                    savatcha
                </NavLink>
                {
                    counterShop === 0 ? "" : <span className="count">{counterShop}</span>
                }
            </div>
        </div>
    )
}

export default Navbar