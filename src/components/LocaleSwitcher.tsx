'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react'

interface LocaleSwitcherProps {
  locale: string
}

const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ locale }) => {
  const router = useRouter();
  const pathname = usePathname();

  return <p
    onClick={() => {
      const splited = pathname.split('/')
      const newPathname = splited.filter((item: string) => item !== locale)
      router.replace(`/${locale === 'ar' ? 'en' : 'ar'}${newPathname.join('/')}`)
      router.refresh()
    }}
  >
    <span className='text-white text-sm font-medium hover:text-gray-400 duration-200 cursor-pointer'>
      {locale === 'ar' ? 'English' : 'العربية'}
    </span>
  </p>
}

export default LocaleSwitcher