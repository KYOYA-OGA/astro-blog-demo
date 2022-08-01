import { createClient } from 'newt-client-js';
import { Post } from 'src/types';
const client = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn', // You can specify "cdn" or "api".
});

export const getAllPosts = async () => {
  const allPosts = client
    .getContents<Post>({
      appUid: import.meta.env.NEWT_APP_UID,
      modelUid: import.meta.env.NEWT_MODEL_UID,
    })
    .then((content) => content)
    .catch((err) => {
      console.log(err);
      return err;
    });
  return allPosts;
};

export const getPostIds = async () => {
  const data = await getAllPosts();
  const ids = data.items.map((item) => {
    return { id: item._id };
  });
  return ids;
};

export const getPostById = async (id) => {
  const singlePost = client
    .getContent<Post>({
      appUid: import.meta.env.NEWT_APP_UID,
      modelUid: import.meta.env.NEWT_MODEL_UID,
      contentId: id,
    })
    .then((content) => content)
    .catch((err) => {
      console.log(err);
      return err;
    });

  return singlePost;
};
