import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Search } from 'lucide-react';


import logo from '@/images/logo.png';
import { navLinks } from '@/utils/nav-links';
import MobileNavbar from './MobileNavbar';

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
  const t = useTranslations('navbar');
  const locale = useLocale();

  const getLocale = (el: string) => t(el)

  const localeNavLinks = navLinks.map(({ href, label }) => ({
    href: href,
    label: getLocale(label)
  }))

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
          className='hidden md:block text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer'
        >
          <Link href={href}>
            <span>{getLocale(label)}</span>
          </Link>
        </p>
      ))
    }
    <Search className='hidden md:block w-6 h-6 text-gray-500 hover:text-gray-900 cursor-pointer' />
    <MobileNavbar navLinks={localeNavLinks} locale={locale} />
  </header>
}

export default Navbar