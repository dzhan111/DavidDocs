
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Header = ({children, className} : HeaderProps) => {
  return (
    <div className={cn('header', className)}>
        <Link href="/" className='md:flex-1'>
        {/* <Image 
        src="/assets/icons/logo.svg"
        alt="logo with name"
        width={120}
        height={32}
        className="hidden md:block"
        />
        <Image 
        src="/assets/icons/logo-con.svg"
        alt="logo"
        width={32}
        height={32}
        className="mr-2 md:hidden"
        /> */}
        <h1 className='text-xl'>DavidDocs</h1>
        
        </Link>
        {children}
    </div>
  )
}

export default Header