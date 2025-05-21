'use client'

import { User } from '@/payload-types'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { setEmailUser } from './emailuser'





const UserAccountNav = ({ user }: { user: User }) => {
  
  const { signOut } = useAuth() 
  setEmailUser(user.email)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className='overflow-visible'>
        <Button
          variant='link'
          size='sm'
          className='relative text-white rounded-xl bg-blue-400 mr-24'>
          My account
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className='bg-white w-60'
        align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-0.5 leading-none'>
            <p className='font-medium text-sm text-black'>
              {user.email}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        

        <DropdownMenuItem asChild >
          <Link href={`/profile/${user.id}`} className='cursor-pointer'>
          Profile
          </Link>
         
         
        </DropdownMenuItem>

        <DropdownMenuItem asChild >
          <Link href={`/qr_list`} className='cursor-pointer'>
          QR List
          </Link>
         
         
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={signOut}
          className='cursor-pointer'>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav



