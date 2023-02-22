import { useRouter } from 'next/router';
import { posts } from '@/posts/posts'
const Post = () => {
    const router = useRouter();
    const { slug } = router.query;

    const properPost = posts.find(post => post.id.toString() === slug);

    if (!properPost) return null;

    return (
        <div>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 text-center">
                    {properPost.title}
                </h1>
                <p className="text-slate-400 mt-2">{properPost.date}</p>
            </div>
            <article>
                <p>{properPost.contains}</p>
            </article>
        </div>
    )
}

export default Post;
