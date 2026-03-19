import axios from 'axios'

import './users.css'
import { useEffect, useState } from 'react'
import UserMap from '../../components/userMap/userMap';
import UserDetail from '../../components/userDetail/UserDetail';

function Users() {





    const [isModalOpen, setIsModalOpen] = useState(false);

    const [itemModalData, setItemModalData] = useState()


    const showModal = (item) => {
        setIsModalOpen(true);
        setItemModalData(item)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };








    const [usersData, setUserData] = useState([])

    async function getData() {
        try {
            const responce = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserData(responce.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
        console.log(getData)

    }, [])

    return (
        <div className='users' >
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>phone</th>
                        <td>shaxsiy ma'lumotlar</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((item, index) => (
                            <UserMap showModal={showModal} item={item} index={index} key={item.id} />
                        ))
                    }
                </tbody>
            </table>
            <UserDetail itemModalData={itemModalData} handleCancel={handleCancel} handleOk={handleOk} isModalOpen={isModalOpen} showModal={showModal} />
        </div>
    )
}

export default Users