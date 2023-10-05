
import NoUserHeader from '@/ui/headerFeature/NoUserHeader'
import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/ui/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zeco shopping',
  description: 'buy clothes online in bamenda, buea,douala,cameroon ',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body className={inter.className}>
      <NoUserHeader/>
        {children}
      <Footer/>
      </body>
     
    </html>
  )
}
