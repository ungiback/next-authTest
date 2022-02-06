import { useSession } from 'next-auth/react'
import Signbar from '../components/signbar'

export default function Home() {
  return (
    <div className='inner'>
      <Signbar />
    </div>
  )
}
