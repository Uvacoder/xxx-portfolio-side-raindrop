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

type ProjectPageProps = {
  params: {
    slug: string
  }
  searchParams: Record<string, never>
}

const ProjectPage = async (props: ProjectPageProps) => {
  const {
    params: { slug },
  } = props

  const project = {
    metadata: {
      name: 'Project Name',
      description: 'Project Description',
      homepage: 'https://example.com',
      github: '',
    },
  }

  if (!project) {
    notFound()
  }

  const { metadata } = project
  const content = await getProject(slug)

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg />
      <FloatingHeader scrollTitle={project.metadata.name} />
      <div className='content-wrapper'>
        <div className='mx-auto mb-16 max-w-5xl px-5 sm:px-8'>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <div className='mx-auto max-w-3xl'>
              <Header metadata={metadata} />
              <BlurImage
                src={`/images/projects/${slug}/cover.png`}
                width={1280}
                height={832}
                alt={metadata.name}
                className='my-12 rounded-lg'
                lazy={false}
              />
              <RichText content={content.content} />
            </div>
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}

export default ProjectPage
