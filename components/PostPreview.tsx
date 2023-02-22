import Link from 'next/link'
import { PostMetadata } from './postMetadata'

const PostPreview = (post: PostMetadata) => {
  return (
  <div className='border border-slate-300 p-4 rounded-md shadow-md bg-white'>
    <p className='text-sm text-slate-400'>{post.date}</p>
    <Link href={`/posts/${post.id}`}>
      <h2 className='text-violet-600 hover:underline  mb-4'>{post.title}</h2>
    </Link>
    <p className='text-slate-700'>{post.subtext}</p>
  </div>
  )
}

export default PostPreview