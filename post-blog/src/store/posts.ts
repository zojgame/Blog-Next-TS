import { Post, Comment, User } from "@/types";
import { atom } from "nanostores";

const $posts = atom<Post[]>([]);

const $currentPost = atom<Post>({
  userId: 0,
  id: 0,
  title: "",
  body: "",
});

const $postComments = atom<Comment[]>([]);

const $currentPostUser = atom<User>({
  id: 0,
  name: "",
  username: "",
  email: "",
});

export { $posts, $currentPost, $postComments, $currentPostUser };
