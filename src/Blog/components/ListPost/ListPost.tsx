import { useSelector } from "react-redux";
import PostItem from "../PostItem/PostItem";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { deletePost, startEditingPost } from "../blog.reducer";

export default function ListPost() {
  const postList = useSelector((state: RootState) => state.blog.postList);
  const dispatch = useDispatch();
  const handleDelete = (postId: string) => {
    dispatch(deletePost(postId));
  };
  const handleStartEditing = (postId: string) => {
    dispatch(startEditingPost(postId));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            BLOG
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Danh sách bài viết
          </p>
        </div>
        <div style={{ width: "90%" }}>
          {postList.map((post) => (
            <PostItem
              post={post}
              key={post.id}
              handleDelete={handleDelete}
              handleStartEditing={handleStartEditing}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
