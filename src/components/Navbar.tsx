import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';


import logo from '@/images/logo.png';

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
  const t = useTranslations('navbar')
  const getLocale = (el: string) => t(el)

  const navLinks = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/gallery', label: 'gallery' },
    { href: '/contact-us', label: 'contactUs' },
    { href: '/products', label: 'products' },
    { href: '/services', label: 'services' },
    { href: '/terms-of-sale', label: 'termsOfSale' }
  ]
  return <header className='container my-8 mx-auto flex items-center justify-between sm:px-4'>
    <Link href='/'>
      <Image
        src={logo}
        alt="ECMF"
        width={147}
        height={45}
        className='w-28 h-7 sm:w-36 sm:h-11'
      />
    </Link>
    {
      navLinks.map(({ href, label }) => (
        <p
          key={`${href}${label}`}
          className='text-sm font-medium text-gray-500 hover:text-gray-900'
        >
          <Link href={href}>
            <span>{getLocale(label)}</span>
          </Link>
        </p>
      ))
    }
    <Search className='w-6 h-6 text-gray-500 hover:text-gray-900' />
  </header>
}

export default Navbar