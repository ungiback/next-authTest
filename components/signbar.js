import { useRouter } from 'next/router'
import styles from '../styles/signbar.module.scss'
import { useSession,signIn,signOut } from 'next-auth/react'

const Signbar = () => {
    const router = useRouter()
    const { data, loading } = useSession()
    console.log("fefe",data)
    if (loading) return <div>loading...</div>
    return (
        <div className={styles.signbar}>
            <div className={styles.sign}>
                {data ? <button onClick={() => signOut()}>SignOut</button> : <button onClick={() => signIn()}>SignIn</button>}
            </div>
        </div >
    )
}

export default Signbar