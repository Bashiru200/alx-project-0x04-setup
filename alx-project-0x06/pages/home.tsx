import { useState } from "react";
import PostModal, { type PostData } from "@/components/common/PostModal";
import Button from "@/components/common/Button";


export default function HomePage() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: PostData) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
      >
        + Add Post
      </button>

      <div className="space-y-4">
        {posts.length === 0 && (
          <p className="text-gray-600">No posts yet. Add one!</p>
        )}
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-lg shadow-sm bg-white"
          >
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
            <div>
                <Button label="Medium Rounded-md" size="medium" shape="rounded-md" />
                <Button label="Medium Rounded-md" size="medium" shape="rounded-md" />
                <Button label="Large Rounded-full" size="large" shape="rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}

// import Button from "@/components/common/Button";

// export default function HomePage() {
//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">About Page</h1>
//       <p className="text-gray-600 mb-4">Here are some example buttons:</p>

//       <div className="flex gap-4">
//         <Button label="Small Rounded-sm" size="small" shape="rounded-sm" />
//         <Button label="Medium Rounded-md" size="medium" shape="rounded-md" />
//         <Button label="Large Rounded-full" size="large" shape="rounded-full" />
//       </div>
//     </div>
//   );
// }
