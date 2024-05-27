'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from 'lucide-react'
import { Link } from '../link'

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
}

type HeaderProps = {
  name: string
  description: string
  homepage: string
  github: string
}

const Header = ({ name, description, homepage, github }: HeaderProps) => {
  const repo = github.split('/').pop()
  return (
    <div className='space-y-8'>
      <motion.div
        className='flex items-center gap-3'
        initial={animation.hide}
        animate={animation.show}
      >
        <div className='flex flex-col gap-3'>
          <div className='text-2xl font-bold'>{name}</div>
          <div>{description}</div>
        </div>
      </motion.div>
      <motion.div
        className='flex flex-col items-start gap-2 sm:flex-row sm:gap-4'
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        {homepage ? (
          <Link href={homepage} className={cn(buttonVariants(), 'group')}>
            Visit Website
            <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
          </Link>
        ) : null}
        <Link href={github} className={cn(buttonVariants(), 'group')}>
          nammdev/{repo}
          <ArrowUpRightIcon className='ml-2 size-5 transition-transform group-hover:-rotate-12' />
        </Link>
      </motion.div>
    </div>
  )
}
export default Header
