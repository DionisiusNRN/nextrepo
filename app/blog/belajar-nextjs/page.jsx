import Heading from "@/components/Heading";
import getPost from "@/lib/post";

export async function BelajarPage() {
  // layer Ui
  const post = await getPost("belajar-nextjs");
  return (
    <>
      <Heading>{post.title}</Heading>
      <p className="italic text-sm pb-2">
        {post.date} - {post.author}
      </p>
      <img
        src={post.image}
        alt=""
        width={640}
        height={360}
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: post.body }}
        className="prose"
      />
    </>
  );
}
