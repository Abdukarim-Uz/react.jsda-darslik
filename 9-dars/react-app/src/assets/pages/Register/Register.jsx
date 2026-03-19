
import './register.css'

import '../login/login.css'

function Register() {

    return (
        <div className='container' >

            <form>


                <label htmlFor="user_name">
                    <h4>Login</h4>
                    <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        placeholder='iltimos loginni kiriting'
                        required

                    />
                </label>

                <label htmlFor="parol">
                    <h4> change password</h4>
                    <input
                        type="text"
                        name='parol'
                        id='parol'
                        placeholder='parolni kiriting'
                        required
                    />
                </label>

                <label htmlFor="parol">
                    <h4>password</h4>
                    <input
                        type="text"
                        name='parol'
                        id='parol'
                        placeholder='parolni kiriting'
                        required
                    />
                </label>

                <div className="check">
                    <input type="checkbox" name="" id="" />
                    <p>
                        foydalanuvchi shartlariga rozi bo'lish
                    </p>
                </div>

                <button>kirish</button>

            </form>
        </div>
    )
}

export default Register