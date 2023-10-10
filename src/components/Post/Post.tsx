import { Post } from "@/types";
import styles from "./styles.module.scss";
import Link from "next/link";

interface PostComponentProps {
  post: Post;
}

const PostComponent = ({ post }: PostComponentProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.body}>{post.body}</div>
      <Link href={`post/${post.id}`}>detail</Link>
    </div>
  );
};

export { PostComponent };
