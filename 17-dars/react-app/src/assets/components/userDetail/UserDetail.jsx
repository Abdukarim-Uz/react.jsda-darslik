import { Button, Descriptions, Modal } from 'antd'
import './userDetail.css'

function UserDetail({ itemModalData, handleCancel, handleOk, isModalOpen }) {
    return (

        <>
            {itemModalData &&

                <Modal
                    closable={true}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={{
                        xs: '90%',
                        sm: '80%',
                        md: '70%',
                        lg: '60%',
                        xl: '50%',
                        xxl: '40%',
                    }}

                >
                    <div className='modal-box' >



                        <div className="name">
                            <label htmlFor="name">
                                name
                                <h3 id='name'> {itemModalData.name} </h3>
                            </label>
                        </div>
                        <div className="phone">
                            <label htmlFor="phone">
                                phone
                                <h3 id='phone'> {itemModalData.phone}</h3>
                            </label>
                        </div>
                        <div className="username">
                            <label htmlFor="username">
                                username
                                <h3 id='username'> {itemModalData.username}</h3>
                            </label>
                        </div>
                        <div className="email">
                            <label htmlFor="email">
                                email
                                <h3 id='email'> {itemModalData.email} </h3>
                            </label>
                        </div>
                        <div className="address">
                            <label htmlFor="street">
                                street
                                <h3 id='street'> {itemModalData.address.street} </h3>
                            </label>
                            <label htmlFor="suite">
                                suite
                                <h3 id='suite'>{itemModalData.address.suite}</h3>
                            </label>
                            <label htmlFor="city">
                                city
                                <h3 id='city'> {itemModalData.address.city}</h3>
                            </label>
                            <label htmlFor="zipcode">
                                zipcode
                                <h3 id='zipcode'> {itemModalData.address.zipcode}</h3>
                            </label>
                        </div>
                        <div className="geo">

                            <label htmlFor="lat">
                                lat
                                <h3 id='lat'> {itemModalData.address.geo.lat}</h3>
                            </label>
                            <label htmlFor="lng">
                                lng
                                <h3 id='lng'> {itemModalData.address.geo.lng} </h3>
                            </label>
                        </div>
                        <div className="geo">
                            <label htmlFor="website">
                                website
                                <h3 id='website'> {itemModalData.website} </h3>
                            </label>

                        </div>
                        <div className="company">
                            <label htmlFor="nameCompany">
                                name company
                                <h3 id='namesCompany'> {itemModalData.company.name}</h3>
                            </label>
                            <label htmlFor="catchPhrase">
                                catchPhrase
                                <h3 id='catchPhrase'> {itemModalData.company.catchPhrase} </h3>
                            </label>
                            <label htmlFor="bs">
                                bs
                                <h3 id='bs'>{itemModalData.company.bs} </h3>
                            </label>

                        </div>
                    </div>
                </Modal >}
        </>

    )
}

export default UserDetail