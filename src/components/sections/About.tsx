import { FC } from 'react'
import Title from '../UI/typography/Title'
import Image from 'next/image'
import { cn } from '@/utils/utils'
import parse from 'html-react-parser';


interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  titleVariant: 'doubleBorder' | 'default'
  body: string
  direction?: 'left' | 'right'
  img: any
}

const About: FC<AboutProps> = ({ title, titleVariant, body, direction, img ,className}) => {
  return <div className={cn(
    'flex items-center gap-2 sm:gap-8',
    direction === 'right' ? 'flex-row-reverse' : '',
    className
  )}>
    <div className="relative flex-1 col-span-1">
      <Image
        src={img}
        alt={title}
        width={img.width}
        height={img.height}
        className='w-full h-auto flex-1'
      />
    </div>
    <div className="w-2/3 col-span-2">
      <div className="flex items-start">
        <Title variant={titleVariant} borderDirection={direction === 'right' ? 'left' : 'right'} className={cn(direction === 'right' ? 'pr-0' : 'pl-0')}>
          {title}
        </Title>
      </div>
      <p className='mt-4 ltr:pl-4 rtl:pl-4 sm:p-0'>
        {parse(body)}
      </p>
    </div>
  </div>
}

export default About