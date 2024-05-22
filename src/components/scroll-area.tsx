import { SCROLL_AREA_ID } from '@/constants'
import { cn } from '@/lib/utils'

interface ScrollAreaProps {
  hasScrollTitle?: boolean
  className?: string
}

export const ScrollArea = ({
  hasScrollTitle = false,
  className,
  ...rest
}: React.PropsWithChildren<ScrollAreaProps>) => (
  <div
    {...rest}
    className={cn('scrollable-area relative w-full', className)}
    id={hasScrollTitle ? SCROLL_AREA_ID : undefined}
  />
)
