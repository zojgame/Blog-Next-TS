import { Post } from "@/types";
import { PostComponent } from "../";
import styles from "./styles.module.scss";

interface PostsProps {
  posts: Post[];
}

const PostsComponent = ({ posts }: PostsProps) => {
  return (
    <div className={styles.posts_container}>
      {posts.map((post) => (
        <PostComponent post={post} key={post.id} />
      ))}
    </div>
  );
};

export { PostsComponent };
