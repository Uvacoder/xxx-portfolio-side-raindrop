import Link from 'next/link'

import Image from 'next/image'
import { LINKS, PROFILES } from '@/constants'
import NavigationLink from './navigation-link'

export const MenuContent = () => (
  <div className='flex flex-col w-full text-sm'>
    <div className='flex flex-col gap-4'>
      <Link href='/' className='inline-flex items-center gap-2 p-2 link-card'>
        <Image
          src='/assets/me.avif'
          alt='Nam Nguyen'
          width={40}
          height={40}
          loading='lazy'
          className='border rounded-full shadow-sm'
        />
        <div className='flex flex-col'>
          <span className='font-semibold tracking-tight'>Nam Nguyen</span>
          <span className='text-gray-600'>Software Engineer</span>
        </div>
      </Link>
      <div className='flex flex-col gap-1'>
        {LINKS.map((link, linkIndex) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            label={link.label}
            Icon={<link.Icon size={16} />}
            shortcutNumber={linkIndex + 1}
          />
        ))}
      </div>
    </div>
    <hr />
    <div className='flex flex-col gap-2 text-sm'>
      <span className='px-2 text-xs font-medium leading-relaxed text-gray-600'>Online</span>
      <div className='flex flex-col gap-1'>
        {Object.values(PROFILES).map((profile, linkIndex) => (
          <NavigationLink
            key={profile.url}
            href={profile.url}
            label={profile.title}
            Icon={<profile.Icon size={16} />}
            shortcutNumber={linkIndex + 1}
          />
        ))}
      </div>
    </div>
  </div>
)
