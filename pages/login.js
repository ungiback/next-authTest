import { useEffect, useState } from 'react'
import styles from '../styles/loginpage.module.scss'

const Loginpage = () => {
    const [inputs, setInputs] = useState({
        id: '',
        password: ''
    })
    const [btn, setBtn] = useState(false)
    useEffect(() => {
        setBtn(inputs.id && Boolean(inputs.password))
    }, [inputs])
    const onSubmit = () => {
        setInputs({
            id: '',
            password: ''
        })
    }
    const onChange = (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    return (
        <div className="inner">
            <div className={styles.container}>
                <div className={styles.form}>
                    <input type="text" placeholder='id' name='id' value={inputs.id} onChange={onChange} />
                    <input type="password" placeholder='password' name='password' value={inputs.password} onChange={onChange} />
                    <button onClick={onSubmit} className={btn ? styles.full : styles.empty}>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Loginpage