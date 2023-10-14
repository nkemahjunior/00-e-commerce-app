
import '../globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/ui/footer/Footer'
import BothHeaders from '@/ui/headerFeature/BothHeaders'
import ReactQueryProvider from './ReactQueryProvider'
import ReactHotToast from './ReactHotToast'
import ShoppingCart from '@/ui/ShoppingCart'
import ReduxProvider from './Redux'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'zeco shopping',
  description: 'buy clothes online in bamenda, buea,douala,cameroon ',
}

export default function RootLayout({ children }) {



 return (
  
    <html lang="en">
     
      
      <body className={`${inter.className} `} >
        <ReactQueryProvider>
         <ReduxProvider>
            <ReactHotToast/>
            <BothHeaders/>
            <ShoppingCart/>
            
              {children}        
            
            <Footer/>
         </ReduxProvider>
        </ReactQueryProvider>
      </body>

      
     
    </html>
  
  )
}
