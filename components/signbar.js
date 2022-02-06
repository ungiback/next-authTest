import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import styles from '../styles/signbar.module.scss'

const Signbar = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const signPage = () => {
        router.push('/auth/signin')
    }

    return (
        <div className={styles.signbar}>
            <div className={styles.sign}>
                {session ? <button onClick={()=>signOut()}>sign out</button> : <button onClick={() => signPage()}>sign In</button>}
            </div>
        </div >
    )
}

export default Signbar