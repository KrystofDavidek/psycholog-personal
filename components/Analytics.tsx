'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { pageView } from '../utils/gtag'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname) {
      pageView(pathname)
    }
  }, [pathname])

  return null
}
