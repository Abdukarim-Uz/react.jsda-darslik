
import { Link } from 'react-router-dom'
import './kinolar.css'

function Kinolar({ kinolar }) {
  return (
    <div className='box' >


      {
        kinolar.map(item => (
          <Link key={item.id} >
            <div className="card">
              <img src={item.url} alt={item.nomi} />
              <h5>{item.nomi}</h5>
            </div>

          </Link>
        ))
      }

    </div>
  )
}

export default Kinolar