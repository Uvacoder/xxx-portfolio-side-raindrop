import { Suspense } from 'react'
import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
import PageTitle from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { getAllPosts } from '@/lib/contentful'
import { getSortedPosts, getItemsByYear } from '@/lib/utils'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { WritingList } from '@/components/writing-list'
import { FloatingHeader } from '@/components/floating-header'

async function fetchData() {
  const allPosts = await getAllPosts()
  const sortedPosts = getSortedPosts(allPosts)
  const items = getItemsByYear(sortedPosts)
  return { items }
}

export default async function Home() {
  const { items } = await fetchData()

  return (
    <ScrollArea useScrollAreaId={true}>
      <FloatingHeader scrollTitle='Nam Nguyen' />
      <div className='content-wrapper'>
        <div className='content'>
          <PageTitle title='Home' className='lg:hidden' />
          <p>
            Hi 👋 I&apos;m Namm, a software engineer, tour guider, writer, and minimalist based in
            Hanoi, Vietnam.
          </p>
          <p>
            I develop things as a Senior Frontend Software Engineer at Bitvavo. Previously, I worked
            as a Senior Frontend Software Engineer at heycar, Frontend Software Engineer at
            Yemeksepeti, Fullstack Software Engineer at Sistas, Mobile Developer at Tanbula, and
            Specialist at Apple.
          </p>
          <Button asChild variant='link' className='inline px-0'>
            <Link href='/writing'>
              <h2 className='mb-4 mt-8'>Writing</h2>
            </Link>
          </Button>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <WritingList items={items} />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
