'use client'

import { useState } from 'react'
import { SendIcon } from 'lucide-react'

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { SubmitBookmarkForm } from '@/components/submit-bookmark/form'
import { SUBMIT_BOOKMARK_FORM_DESCRIPTION, SUBMIT_BOOKMARK_FORM_TITLE } from '@/constants'
import { Button } from '../ui/button'

export const SubmitBookmarkDrawer = ({ bookmarks, currentBookmark }) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size='xs' className='relative'>
          <SendIcon size={16} className='mr-2' />
          Submit
        </Button>
      </DrawerTrigger>
      <DrawerContent className='px-6'>
        <DrawerHeader className='sm:text-center'>
          <DrawerTitle>{SUBMIT_BOOKMARK_FORM_TITLE}</DrawerTitle>
          <DrawerDescription className='m-0'>{SUBMIT_BOOKMARK_FORM_DESCRIPTION}</DrawerDescription>
        </DrawerHeader>
        <SubmitBookmarkForm
          setFormOpen={setOpen}
          bookmarks={bookmarks}
          currentBookmark={currentBookmark}
          className='py-8'
        />
      </DrawerContent>
    </Drawer>
  )
}
