'use client'
 
import cn from 'classnames'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
 
// This *client* component will be imported into an adminMgt layout
export default function AdminNavLink({
  segLink,
  children,
}: {
  segLink: string
  children: React.ReactNode
}) {
  // Navigating to `/admin/userlist` will return 'userlist'
  // for the selected layout segment
  const segment = useSelectedLayoutSegment()
  const isActive = segLink === segment
  const activeStyle = isActive? "text-blue-500 bg-blue-300/40 font-medium rounded-sm":"font-normal text-md text-gray-600 bg-none"
  return (
    <Link
      href={`/authPage/adminMgt/${segLink}`}
      // Change style depending on whether the link is active
      className={`p-2 border-transparent border-spacing-2 rounded-md ${activeStyle}`}    >
      {children}
    </Link>
  )
}