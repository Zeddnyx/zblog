import { Inter,Radio_Canada } from 'next/font/google'

const inter = Inter({ subsets: ['latin'],variable: "--font-inter" })
const canada = Radio_Canada({ subsets: ['latin'],variable: "--font-canada" })

 export default function Index({children}: {children: React.ReactNode}) {
  return (
    <div className={`${inter.className} ${canada.className} `}>
      {children}
    </div>
  )
}
