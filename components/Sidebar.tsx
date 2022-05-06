import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  BookmarkIcon,
  CollectionIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import SidebarRow from './SidebarRow'

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <div className="relative m-3 h-10 w-10">
        <Image
          src="https://links.papareact.com/drq"
          alt="Twitter"
          layout="fill"
        />
      </div>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow
        Icon={UserIcon}
        title={session ? 'Sign Out' : 'Sign In'}
        onClick={session ? signOut : signIn}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />

      <div className="mt-4 w-full cursor-pointer items-center rounded-full bg-twitter py-4 text-center transition duration-200 ease-out hover:opacity-70 active:scale-95 active:opacity-80">
        <p className="font-bold text-white">Tweet</p>
      </div>
    </div>
  )
}
export default Sidebar
