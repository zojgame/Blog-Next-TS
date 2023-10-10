import styles from "./styles.module.scss";
import { PostsComponent, PaginationComponent } from "@/components";
import { pageValidation } from "@/consts";
import { $posts } from "@/store";
import { getPosts } from "@/api";

interface CurrentPageProps {
  params: {
    currentPage: string;
  };
}

export default async function CurrentPage({ params }: CurrentPageProps) {
  const currentPage = pageValidation(params.currentPage);
  await getPosts(currentPage).then((posts) => $posts.set(posts));
  const posts = $posts.get();

  return (
    <main className={styles.main}>
      <PostsComponent posts={posts} />
      <PaginationComponent page={currentPage} />
    </main>
  );
}
