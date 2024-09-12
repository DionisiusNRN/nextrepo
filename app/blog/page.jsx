import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="text-2xl mb-3">List of Posts</h2>

      <PostCard
        title="Belajar Next.Js"
        href="/blog/belajar-nextjs"
        image="/images/image-1.jpg"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt obcaecati cum aperiam saepe quam molestiae natus aliquam, laboriosam, unde tempora ipsam?"
        date="13.12.2022"
        author="admin"
      />
    </>
  );
}
