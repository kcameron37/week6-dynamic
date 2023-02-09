import { Inter } from '@next/font/google'
import Survey from './survey'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Survey/>
    </>
  )
}
