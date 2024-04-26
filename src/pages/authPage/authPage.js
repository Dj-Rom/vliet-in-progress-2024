import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeInputPassword, changeInputLogin, submitLoginAndPasswords, selecterInputWithAuthPage_password, selecterInputWithAuthPage_login } from "../../redux/slices/slicesAuth"
const AuthPage = () => {
    const authPage_password = useSelector(selecterInputWithAuthPage_password)
    const authPage_login = useSelector(selecterInputWithAuthPage_login)
    const dispatch = useDispatch()

    return (
        <section>
            <h1>Welcome in App for Drivers</h1>
            <label>Please write your login</label> <input type="text" onChange={(e) => dispatch(changeInputLogin(e.target.value))} value={authPage_login} /><br />
            <label>Please write your password</label> <input type="password" onChange={(e) => dispatch(changeInputPassword(e.target.value))} value={authPage_password} />
            <button onClick={() => dispatch(submitLoginAndPasswords())}>ENTER</button>
        </section>
    )
}

export default AuthPage 
