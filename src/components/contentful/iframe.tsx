import { ShowInView } from '@/components/show-in-view'
import { cn } from '@/lib/utils'

export function Iframe({ embedUrl, title, className, ...rest }) {
  return (
    <ShowInView>
      <figure>
        <iframe
          src={
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/840783349&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
          }
          title={title}
          allowFullScreen
          className={cn('w-full rounded border-0 border-none shadow-lg', className)}
          {...rest}
        />
        <figcaption className='mt-2 break-words text-center text-xs font-light text-gray-500'>
          {title}
        </figcaption>
      </figure>
    </ShowInView>
  )
}
