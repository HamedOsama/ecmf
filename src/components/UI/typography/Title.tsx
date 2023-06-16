import { FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/utils'


const TitleVariants = cva(
  'text-xl md:text-3xl lg:text-4xl font-bold',
  {
    variants: {
      variant: {
        default: 'text-primary text-start',
        doubleBorder: 'w-[fit-content] border-r-[3px] border-t-[3px]  border-t-primary border-r-primary px-4 py-2 text-primary text-center relative before:absolute before:w-full before:h-full before:-top-4 before:-right-4 before:border-t-[3px] before:border-r-[3px] before:border-t-primary before:border-r-primary rounded-tr-md before:rounded-tr-md',
      }
    },
    defaultVariants: {
      variant: 'default',
    }
  }
)
interface TitleProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof TitleVariants> {
  children: React.ReactNode
}
const Title: FC<TitleProps> = ({ children, variant, className, ...rest }) => {
  return <p
    className={cn(TitleVariants({ variant, className }))}
    {...rest}
  >
    {children}
  </p>
}

export default Title