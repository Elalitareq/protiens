import Providers from '@/app/components/providers'
import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode;
  }
  
  


const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <Providers>
        <div className='min-h-screen bg-new-black w-full flex flex-col items-center justify-center'>

        {children}
        </div>
    </Providers>   
  )
}

export default Layout