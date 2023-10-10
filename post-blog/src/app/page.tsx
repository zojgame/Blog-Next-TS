import styles from "./page.module.scss";
import { PostsComponent, PaginationComponent } from "@/components";
import { $posts } from "@/store";
import { getPosts } from "@/api";

export default async function Home() {
  await getPosts(1).then((posts) => $posts.set(posts));

  const posts = $posts.get();

  return (
    <main className={styles.main}>
      <PostsComponent posts={posts} />
      <PaginationComponent page={1} />
    </main>
  );
}
