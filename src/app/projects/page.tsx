import { Suspense } from 'react'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { ScrollArea } from '@/components/scroll-area'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { GradientBg } from '@/components/gradient-bg'
import { RichText } from '@/components/contentful/rich-text'
import { getPage, getPageSeo, getAllPageSlugs, getAllProjects } from '@/lib/contentful'
import { isDevelopment } from '@/lib/utils'
import PageTitle from '@/components/page-title'
import ProjectCards, { ProjectMetadata } from './project-cards'

export default async function PageSlug({ params }) {
  const title = 'Projects'
  // const projects: ProjectMetadata[] = [
  //   {
  //     name: 'Blog',
  //     description: 'Share my knowledge and experience',
  //     homepage: 'https://project1.com',
  //     github: 'https://github.com/project1',
  //     techstack: [
  //       { label: 'Typescript' },
  //       { label: 'Nextjs' },
  //       { label: 'PostgreSQL' },
  //       { label: 'Drizzle' },
  //       { label: 'MDX' },
  //     ],
  //     selected: true,
  //     slug: 'project-1',
  //   },
  //   {
  //     name: 'Friend quiz cheat tool',
  //     description: ' Get full score in friend quiz',
  //     homepage: 'https://project2.com',
  //     github: 'https://github.com/project2',
  //     techstack: [{ label: 'Tech 3' }, { label: 'Tech 4' }],
  //     selected: false,
  //     slug: 'project-2',
  //   },
  //   // {
  //   //   name: 'Project 3',
  //   //   description: 'Description of Project 3',
  //   //   homepage: 'https://project3.com',
  //   //   github: 'https://github.com/project3',
  //   //   techstack: [{ label: 'Tech 5' }, { label: 'Tech 6' }],
  //   //   selected: true,
  //   //   slug: 'project-3',
  //   // },
  //   // {
  //   //   name: 'Project 4',
  //   //   description: 'Description of Project 4',
  //   //   homepage: 'https://project4.com',
  //   //   github: 'https://github.com/project4',
  //   //   techstack: [{ label: 'Tech 7' }, { label: 'Tech 8' }],
  //   //   selected: false,
  //   //   slug: 'project-4',
  //   // },
  // ]
  const projects = await getAllProjects(true)
  const transformedProjects = projects.map((project) => ({
    ...project,
    techstack: project.techstackCollection.items,
  }))

  console.log(transformedProjects)

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg />
      <FloatingHeader scrollTitle={title} />
      <div className='content-wrapper'>
        <div className='mx-auto mb-16 max-w-5xl px-5 sm:px-8'>
          <PageTitle title={title} className='pl-2' />
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <ProjectCards projects={transformedProjects} />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
