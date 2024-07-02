'use client'

import { useCallback, useMemo } from 'react'
import { Link } from './link'
import { BlurImage } from './ui'

export type ProjectMetadata = {
  name: string
  description: string
  homepage: string
  github: string
  techstack: Array<{ label: string }>
  selected: boolean
  slug: string
}

export type ProjectCardProps = ProjectMetadata
export type ProjectCardsProps = {
  projects: ProjectMetadata[]
}

const ProjectCards = (props: ProjectCardsProps) => {
  const { projects } = props

  const getChunks = useCallback(() => {
    const firstChunk: ProjectMetadata[] = []
    const lastChunk: ProjectMetadata[] = []
    projects.forEach((element, index) => {
      if (index % 2 === 0) {
        firstChunk.push(element)
      } else {
        lastChunk.push(element)
      }
    })
    return [[...firstChunk], [...lastChunk]]
  }, [projects])

  const chunks = useMemo(() => getChunks(), [getChunks])

  return (
    <div className='grid md:grid-cols-2 gap-8'>
      {chunks.map((chunk, chunkIndex) => {
        return (
          <div key={`chunk_${chunkIndex}`} className='grid gap-8 place-content-start'>
            {chunk.map((projecgt) => {
              return <ProjectCard key={projecgt.slug} {...projecgt} />
            })}
          </div>
        )
      })}
    </div>
  )
}

const ProjectCard = (props: ProjectCardProps) => {
  const { name, description, techstack, slug } = props

  return (
    <Link href={`/projects/${slug}`} className='group rounded-xl px-2 py-4 '>
      <BlurImage
        src={`/images/projects/${slug}/cover.png`}
        width={1280}
        height={832}
        imageClassName='group-hover:scale-105 border-none'
        alt={name}
        className='rounded-lg'
      />
      <div className='flex-1 px-2 py-4'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>{name}</h2>
          <div className='text-muted-foreground'>{description}</div>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {techstack.map((t) => {
            const { label } = t

            return (
              <div
                key={label}
                className='rounded-full border bg-zinc-50 px-3 py-2 text-xs leading-4 dark:bg-zinc-900'
              >
                {label}
              </div>
            )
          })}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCards
