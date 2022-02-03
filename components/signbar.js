import { useRouter } from 'next/router'
import styles from '../styles/signbar.module.scss'

const Signbar = () => {
    const router = useRouter()
    return (
        <div className={styles.signbar}>
            <div className={styles.sign}>
                <button onClick={() => router.push({
                    pathname:'/login'
                })}>Sign In</button>
            </div>
        </div >
    )
}

export default Signbar