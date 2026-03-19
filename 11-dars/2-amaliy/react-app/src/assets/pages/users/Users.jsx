
import React from 'react'

import './users.css'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import UserMap from '../../components/userMap/UserMap'

function Users({ users, setUsers }) {
    const navigate = useNavigate()

    const exit = () => {
        navigate(-1)
    }
    return (
        <div className='user-box' >
            <UserMap  users={users} setUsers={setUsers} />
            <button onClick={exit} className='btn-icon' >
                <BsBoxArrowInLeft className='exit-icon' />
                <h2>ortga</h2>
            </button>
        </div>
    )
}

export default Users