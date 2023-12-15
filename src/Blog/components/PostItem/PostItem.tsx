import { Button } from "antd";
import IBlog from "../../../models/blog.model";
interface PostItemType {
  post: IBlog;
  handleDelete: (postId: string) => void;
  handleStartEditing: (postId: string) => void;
}
export default function PostItem({
  post,
  handleDelete,
  handleStartEditing,
}: PostItemType) {
  const customButtonStyle = {
    margin: "20px",
    border: "1px solid",
    padding: "20px 15px",
  };
  return (
    <div style={customButtonStyle}>
      <div className="flex flex-col gap-2 p-4 lg:p-6">
        <span className="text-sm text-gray-400">{post.publishDate}</span>
        <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
        <p className="text-gray-500">{post.description}</p>
        <div>
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => handleStartEditing(post.id)}
            >
              Edit
            </Button>
            <Button onClick={() => handleDelete(post.id)}>Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
