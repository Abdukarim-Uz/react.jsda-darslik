import React from 'react'


import './userspage.css'
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from 'react-icons/fa';
import { GoSignIn } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import Usermaped from '../../components/usermap/Usermaped';

function Userspage({ users, setUsers, trasheds, setTrasheds }) {
    const navigate = useNavigate(-1)


    const gotoSignIn = () => {
        navigate(-1)
    }

    return (
        <div className='users' >
            <Usermaped users={users} setUsers={setUsers} trasheds={trasheds} setTrasheds={setTrasheds} />

            <button onClick={gotoSignIn} className='btn' > <GoSignIn fill='white' /> <h6>ortga</h6></button>
        </div>
    )
}

export default Userspage