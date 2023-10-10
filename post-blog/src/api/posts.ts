import { URL_POSTS, URL_API_V2 } from ".";
import { getUser } from ".";

function getPosts(page: number) {
  const response = fetch(`${URL_API_V2}?page=${page}`).then((res) =>
    res.json()
  );
  return response;
}

function getCurrentPost(post: string) {
  const response = fetch(`${URL_POSTS}/${post}`).then((res) => res.json());

  return response;
}

function getPostComments(post: string) {
  const response = fetch(`${URL_POSTS}/${post}/comments`).then((res) =>
    res.json()
  );
  return response;
}

export { getPosts, getCurrentPost, getPostComments };
