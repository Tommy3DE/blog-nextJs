// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { posts } from '@/posts/posts'
import { PostMetadata } from '@/components/postMetadata'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostMetadata[]>
) {
  res.status(200).json(posts)
}
