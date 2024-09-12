import matter from "gray-matter";
import { marked } from "marked";
import { readFile } from "node:fs/promises";

export default async function getPost(slug) {
  // layer data
  const text = await readFile(`./content/blog/${slug}.md`, "utf8");
  const {
    content,
    data: { title, image, date, author },
  } = matter(text);
  const body = marked(content);

  return { title, image, date, author, body };
}
