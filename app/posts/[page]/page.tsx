import { PostMetadata } from "@/components/postMetadata";
const PostPage = ({title, date, contains}: PostMetadata) => {
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 text-center">
          {title}
        </h1>
        <p className="text-slate-400 mt-2">{date}</p>
      </div>
      <article>
        <p>{contains}</p>
      </article>
    </div>
  );
};
export default PostPage;
