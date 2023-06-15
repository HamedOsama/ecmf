import { FC } from 'react'
import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/utils'


const TitleVariants = cva(
  'text-xl md:text-3xl lg:text-4xl font-bold',
  {
    variants: {
      variant: {
        default: 'text-primary text-start',
        doubleBorder: '',
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