import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import Header from './header'
import { BlurImage } from '../ui'
import { ScrollArea } from '@/components/scroll-area'
import { GradientBg } from '@/components/gradient-bg'
import { FloatingHeader } from '@/components/floating-header'
import { Suspense } from 'react'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { RichText } from '@/components/contentful/rich-text'
import { getProject } from '@/lib/contentful'
import { draftMode } from 'next/headers'
import { isDevelopment } from '@/lib/utils'

type ProjectPageProps = {
  params: {
    slug: string
  }
  searchParams: Record<string, never>
}

async function fetchData(slug: string) {
  const { isEnabled } = draftMode()
  const data = await getProject(slug, isDevelopment ? true : isEnabled)
  if (!data) notFound()
  return {
    data,
  }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { slug } = params
  const { data } = await fetchData(slug)
  const { name, description, homepage, github, content } = data

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg />
      <FloatingHeader scrollTitle={name} />
      <div className='content-wrapper'>
        <div className='mx-auto mb-16 max-w-5xl px-5 sm:px-8'>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <div className='mx-auto max-w-3xl'>
              <Header name={name} description={description} homepage={homepage} github={github} />
              <BlurImage
                src={`/images/projects/${slug}/cover.png`}
                width={1280}
                height={832}
                alt={name}
                className='my-12 rounded-lg'
                lazy={false}
              />
              <RichText content={content} />
            </div>
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}

export default ProjectPage
