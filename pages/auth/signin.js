import { getProviders, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'


const SignIn = ({ providers }) => {
    return (
        <>
            {Object.values(providers).map((provider) => {
                return (
                    <div key={provider.name}>
                        <button onClick={() => signIn(provider.id)}>
                            Sign in with {provider.name}
                        </button>
                    </div>
                )
            })}
        </>
    )
}
export default SignIn

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers
        }
    }
}