import { type ClassValue, clsx } from 'clsx'
import { cache } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isDevelopment = process.env.NODE_ENV === 'development'

/**
 * Sorts an array of blog post objects based on their date field (only for old blog posts) or publication dates in descending order.
 * The function compares the 'date' property of each post or 'firstPublishedAt' property from the 'sys' object.
 * The posts are sorted by creating Date objects from the publication dates and comparing them.
 *
 * @param posts - The array of blog post objects to be sorted.
 * @returns - The sorted array of blog posts in descending order based on their publication dates.
 */
export const getSortedPosts = cache((posts: any) => {
  return posts.sort((a, b) => {
    const dateA = a.date || a.sys.firstPublishedAt
    const dateB = b.date || b.sys.firstPublishedAt
    return new Date(dateB) - new Date(dateA)
  })
})

/**
 * Function to group items by year based on the provided date.
 *
 * @param items - The array of items to be grouped by year.
 * @returns - An array of arrays, each containing items grouped by year.
 */
export const getItemsByYear = (items: any) => {
  return items.reduce((acc, item) => {
    const year = new Date(item.date || item.sys.firstPublishedAt).getFullYear()
    const yearArr = acc.find((item) => item[0] === year)
    if (!yearArr) {
      acc.push([year, [item]])
    } else {
      yearArr[1].push(item)
    }

    return acc
  }, [])
}
