import { Suspense } from 'react'
import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { GradientBg } from '@/components/gradient-bg'
import { getAllProjects } from '@/lib/contentful'
import PageTitle from '@/components/page-title'
import ProjectCards from './project-cards'

async function fetchData() {
  const projects = await getAllProjects(true)
  const transformedProjects = projects.map((project) => ({
    ...project,
    techstack: project.techstackCollection.items,
  }))
  return transformedProjects
}

export default async function Projects() {
  const projects = await fetchData()

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg />
      <FloatingHeader scrollTitle={'Projects'} />
      <div className='content-wrapper'>
        <div className='mx-auto mb-16 max-w-5xl px-5 sm:px-8'>
          <PageTitle title={'Projects'} className='pl-2' />
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <ProjectCards projects={projects} />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
