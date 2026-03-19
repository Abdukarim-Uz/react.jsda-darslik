
import { Link } from 'react-router-dom'
import './asosiy.css'

function Asosiy({ malumot }) {
  return (
    <div className='box' >
      {
        malumot.map(item => (
          <Link key={item.id} >
            <div className="card">
              <img src={item.url} alt={item.nomi} />
              <h6>{item.nomi}</h6>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Asosiy