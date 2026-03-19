import { Button } from "antd"
import { ImProfile } from "react-icons/im"

function UserMap({  showModal, item, index }) {
    return (


        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>
                {/* <button className="profile-btn" ></button> */}

                <Button type="primary" onClick={()=>showModal(item)}>
                    <ImProfile className="profile-icon" />
                </Button>
            </td>
        </tr>


    )
}

export default UserMap