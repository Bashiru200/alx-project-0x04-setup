import React, { useState  } from 'react';

export type PostData = {
    title: string;
    content:string;
};

type PostModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: PostData) => void;
};

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    if (!isOpen) return null; // Do not render if close

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onSubmit({title, content });
            setTitle("");
            setContent("");
            onClose();
    }
};

return(
    <div className="fixed inset-0 flex items-center justify-center bg-teal/40 z-50">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">Create Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounder-lg px-3 py-2"
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full border rounded-lg px-3 py-2"
                    rows={4}
                    required
                    id=""></textarea>
            </form>

        </div>

    </div>
)
};

export default PostModal;