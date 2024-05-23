'use client'

import { memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { ArrowLeftIcon, RadioIcon } from 'lucide-react'
import { LoadingSpinner } from '@/components/loading-spinner'
import { Button } from './ui/button'
import { MOBILE_SCROLL_THRESHOLD, SCROLL_AREA_ID } from '@/constants'
import MobileDrawer from './mobile-drawer'

// const SubmitBookmarkDrawer = dynamic(
//   () => import('@/components/submit-bookmark/drawer').then((mod) => mod.SubmitBookmarkDrawer),
//   {
//     loading: () => <LoadingSpinner />,
//     ssr: false,
//   }
// )

export const FloatingHeader = ({
  scrollTitle,
  title,
  goBackLink,
  bookmarks,
  currentBookmark,
  children,
}) => {
  const [transformValues, setTransformValues] = useState({
    translateY: 0,
    opacity: scrollTitle ? 0 : 1,
  })
  const pathname = usePathname()
  const isWritingIndexPage = pathname === '/writing'
  const isWritingPath = pathname.startsWith('/writing')
  const isBookmarksIndexPage = pathname === '/bookmarks'
  const isBookmarkPath = pathname.startsWith('/bookmarks')

  useEffect(() => {
    const scrollAreaElem = document.querySelector(`#${SCROLL_AREA_ID}`)
    const onScroll = (e) => {
      const scrollY = e.target.scrollTop
      const translateY = Math.max(100 - scrollY, 0)
      const opacity = Math.min(
        Math.max(
          (
            (scrollY - MOBILE_SCROLL_THRESHOLD * (MOBILE_SCROLL_THRESHOLD / (scrollY ** 2 / 100))) /
            100
          ).toFixed(2),
          0
        ),
        1
      )
      setTransformValues({ translateY, opacity })
    }
    if (scrollTitle) {
      scrollAreaElem?.addEventListener('scroll', onScroll, {
        passive: true,
      })
    }
    return () => scrollAreaElem?.removeEventListener('scroll', onScroll)
  }, [scrollTitle])

  return (
    <header className='sticky inset-x-0 top-0 z-10 flex items-center w-full h-12 mx-auto overflow-hidden text-sm font-medium bg-white border-b shrink-0 lg:hidden'>
      <div className='flex items-center px-3 size-full'>
        <div className='flex items-center justify-between w-full gap-2'>
          <div className='flex items-center flex-1 gap-1'>
            {goBackLink ? (
              <Button variant='ghost' size='icon' className='shrink-0' asChild>
                <Link href={goBackLink} title='Go back'>
                  <ArrowLeftIcon size={16} />
                </Link>
              </Button>
            ) : (
              <MobileDrawer />
            )}
            <div className='flex items-center justify-between flex-1'>
              {scrollTitle && (
                <span
                  className='font-semibold tracking-tight line-clamp-2'
                  style={{
                    transform: `translateY(${transformValues.translateY}%)`,
                    opacity: transformValues.opacity,
                  }}
                >
                  {scrollTitle}
                </span>
              )}
              {title && (
                <Balancer ratio={0.35}>
                  <span className='font-semibold tracking-tight line-clamp-2'>{title}</span>
                </Balancer>
              )}
              <div className='flex items-center gap-2'>
                {(isWritingIndexPage || isBookmarksIndexPage) && (
                  <Button variant='outline' size='xs' asChild>
                    <a
                      href={isWritingIndexPage ? '/writing.xml' : '/bookmarks.xml'}
                      title='RSS feed'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <RadioIcon size={16} className='mr-2' />
                      RSS feed
                    </a>
                  </Button>
                )}
                {/* {isBookmarkPath && (
                    <SubmitBookmarkDrawer bookmarks={bookmarks} currentBookmark={currentBookmark} />
                  )} */}
              </div>
            </div>
          </div>
          {/* This is a hack to show writing views with framer motion reveal effect */}
          {scrollTitle && isWritingPath && (
            <div className='flex min-w-[50px] justify-end'>{children}</div>
          )}
        </div>
      </div>
    </header>
  )
}
