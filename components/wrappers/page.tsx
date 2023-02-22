import PostPreview from "@/components/PostPreview";
import { posts } from '../../posts/posts'

// async function getPosts(){
//   const response = await fetch('http://localhost:3000/api/posts')
//   const data = await response.json()

//   return data.posts
// }


const HomePage = async () => {
  // const posts = await getPosts()
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <PostPreview key={post.id} {...post} />
      ))}
    </div>
  );
};

export default HomePage;
