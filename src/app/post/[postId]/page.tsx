import styles from "./styles.module.scss";
import { getCurrentPost, getPostComments, getUser } from "@/api";
import { $currentPost, $postComments, $currentPostUser } from "@/store";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

interface PostPageProps {
  params: {
    postId: string;
  };
}

const PostPage = async ({ params }: PostPageProps) => {
  const { postId } = params;
  await getCurrentPost(postId).then((post) => {
    $currentPost.set(post);
    getUser(post.userId).then((users) => $currentPostUser.set(users[0]));
  });
  await getPostComments(postId).then((comments) => $postComments.set(comments));
  const currentPost = $currentPost.get();
  const postComments = $postComments.get();
  const postUser = $currentPostUser.get();

  return (
    <div className={styles.post_container}>
      <Link href={`../`}>
        Go Home <HomeOutlined />
      </Link>
      <div className={styles.post_title}>{currentPost.title}</div>
      <div className={styles.post_body}>{currentPost.body}</div>
      <div className={styles.post_user}>
        <UserOutlined style={{ fontSize: "40px" }} />
        {postUser.username}
      </div>
      <div className={styles.comments_container}>
        <h3>{postComments.length} comments:</h3>
        {postComments.map((comment) => (
          <div className={styles.comment} key={comment.id}>
            <UserOutlined style={{ fontSize: "40px" }} />
            <div className={styles.content}>
              <div className={styles.email}>{comment.email}</div>
              <div className={styles.name}>{comment.name}</div>
              <div className={styles.body}>{comment.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
