import { isFollowingUser } from '@/lib/follow-service'
import { getUserByUsername } from '@/lib/user-service'
import { notFound } from 'next/navigation'
import { Actions } from './_components/actions'
type Props = {
    params: {
        username: string
    }
}

const UserPage = async({params}: Props) => {
  const user = await getUserByUsername(params.username)
  if (!user) {
    return notFound();
  }

const isFollowing =  await isFollowingUser(user.id);
  return (
    <div className='flex flex-col gap-y-4'>
        <p>{user?.username}</p>
        <p>{user?.id}</p>
        <p>is Follwoing: {`${isFollowing}`}</p>
      <Actions isFollowing={isFollowing} />
    </div>
  )
}

export default UserPage