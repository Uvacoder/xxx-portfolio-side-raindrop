import { TwitterIcon } from './icons'
import {
  NavigationIcon,
  DogIcon,
  PenToolIcon,
  PocketKnifeIcon,
  GithubIcon,
  LinkedinIcon,
  SparklesIcon,
  PencilLineIcon,
  Wand2Icon,
  ArmchairIcon,
  BookmarkIcon,
  AtSignIcon,
  InstagramIcon,
  YoutubeIcon,
  AwardIcon,
} from 'lucide-react'

export const PROFILES = {
  twitter: {
    title: 'X (Twitter)',
    username: 'MonsterPi13',
    url: 'https://twitter.com/intent/user?screen_name=MonsterPi13',
    Icon: TwitterIcon,
  },
  github: {
    title: 'GitHub',
    url: 'https://github.com/MonsterPi13',
    Icon: GithubIcon,
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/%E9%B9%8F-%E9%98%AE-764b91215/',
    Icon: LinkedinIcon,
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/jgrmn',
    Icon: InstagramIcon,
  },
  youtube: {
    title: 'YouTube',
    url: 'https://www.youtube.com/c/jagermanmusic',
    Icon: YoutubeIcon,
  },
}

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    Icon: SparklesIcon,
  },
  {
    href: '/writing',
    label: 'Writing',
    Icon: PencilLineIcon,
  },
  {
    href: '/projects',
    label: 'Projects',
    Icon: AwardIcon,
  },
  {
    href: '/journey',
    label: 'Journey',
    Icon: NavigationIcon,
  },
  {
    href: '/stack',
    label: 'Stack',
    Icon: Wand2Icon,
  },
  {
    href: '/workspace',
    label: 'Workspace',
    Icon: ArmchairIcon,
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
    Icon: BookmarkIcon,
  },
]

export const TWEETS_COLLECTION_ID = 15896982

export const COLLECTION_IDS = [26610226, 27331163, TWEETS_COLLECTION_ID]

export const WORKSPACE_ITEMS = [
  {
    title: 'Richard Lampert Eiermann 2 Desk',
    url: 'https://www.richard-lampert.de/en/furniture/eiermann-2-desk-en/',
    specs: 'White, 80x160cm',
  },
  {
    title: 'Herman Miller Aeron Remastered',
    url: 'https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html',
    specs: 'Graphite, Size C',
  },
  {
    title: 'Apple Studio Display',
    url: 'https://www.apple.com/nl/studio-display/',
    specs: 'Tilt- and height-adjustable stand',
  },
  {
    title: '14" MacBook Pro',
    url: 'https://www.apple.com/nl/macbook-pro/',
    specs: 'Space Gray, M2, 16GB RAM, 256GB SSD',
  },
  {
    title: 'TE Computer-1 Mini-IPX PC',
    url: '/writing/mini-itx-teenage-engineering-computer-1',
    specs: 'Orange, AMD Ryzen 5 7600, 32GB RAM, 2TB SSD',
  },
  {
    title: 'Apple Magic Trackpad',
    url: 'https://www.apple.com/nl/shop/product/MK2D3Z/A/magic-trackpad-wit-multi%E2%80%91touch-oppervlak',
    specs: 'White',
  },
  {
    title: 'Apple Magic Keyboard',
    url: 'https://www.apple.com/nl/shop/product/MK293N/A/magic-keyboard-met-touch-id-voor-mac-modellen-met-apple-silicon-nederlands',
    specs: 'White, Touch ID',
  },
  {
    title: 'Logitech MX Master 3S',
    url: 'https://www.logitech.com/nl-nl/products/mice/mx-master-3s.910-006560.html',
    specs: 'Pale Gray',
  },
  {
    title: 'Dyson Solarcycle Morph',
    url: 'https://www.dyson.nl/verlichting/bureaulamp/solarcycle-morph-cd06/wit-zilver',
    specs: 'White/Silver',
  },
  {
    title: 'Oakywood MagSafe iPhone Stand',
    url: 'https://oakywood.shop/products/magsafe-iphone-stand',
    specs: 'Oak',
  },
  {
    title: 'Apple Airpods Max',
    url: 'https://www.apple.com/nl/airpods-max/',
    specs: 'Space Gray',
  },
  {
    title: 'Apple Airpods Pro',
    url: 'https://www.apple.com/nl/airpods-pro/',
    specs: '2nd generation',
  },
  {
    title: 'Braun Analogue Wall Clock',
    url: 'https://braun-clocks.com/collections/wall-clocks/products/bc17-classic-large-analogue-wall-clock-white',
    specs: 'White, BC17 Classic Large',
  },
  {
    title: 'IKEA Alex Drawer Unit',
    url: 'https://www.ikea.com/nl/en/p/alex-drawer-unit-white-00473546/',
    specs: 'White, 36x70cm',
  },
  {
    title: 'IKEA Övning Footrest',
    url: 'https://www.ikea.com/nl/en/p/oevning-multifunctional-ergonomic-footrest-00552020/',
    specs: 'Gray/Blue',
  },
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'

export const SUBMIT_BOOKMARK_FORM_TITLE = 'Submit a bookmark'
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION =
  "Send me a website you like and if I like it too, you'll see it in the bookmarks list. With respect, please do not submit more than 5 websites a day."
export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 5
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount'

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook',
}
