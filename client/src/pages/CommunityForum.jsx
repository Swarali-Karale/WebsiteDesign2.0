import React, { useState } from "react";
const initialThreads = [
    {
        id: 1,
        title: "Welcome to the Community!",
        author: "Admin",
        posts: [
            { id: 1, author: "Admin", content: "Wowie!" },
            { id: 2, author: "Bartholomew", content: "heheheheheheh!" },
        ],
    },
    {
        id: 2,
        title: "Share your favorite resources",
        author: "Iwannasleep",
        posts: [
            { id: 1, author: "Iwannasleep", content: "give me free cookies" },
        ],
    },
];

function CommunityForum() {
    const [threads, setThreads] = useState(initialThreads);
    const [selectedThread, setSelectedThread] = useState(null);
    const [newThreadTitle, setNewThreadTitle] = useState("");
    const [newPostContent, setNewPostContent] = useState("");

    // Create a new thread
    const handleNewThread = (e) => {
        e.preventDefault();
        if (!newThreadTitle.trim()) return;
        const newThread = {
            id: Date.now(),
            title: newThreadTitle,
            author: "You",
            posts: [],
        };
        setThreads([newThread, ...threads]);
        setNewThreadTitle("");
    };

    // Add a new post to the selected thread
    const handleNewPost = (e) => {
        e.preventDefault();
        if (!newPostContent.trim() || !selectedThread) return;
        const updatedThreads = threads.map((thread) =>
            thread.id === selectedThread.id
                ? {
                        ...thread,
                        posts: [
                            ...thread.posts,
                            {
                                id: Date.now(),
                                author: "You",
                                content: newPostContent,
                            },
                        ],
                    }
                : thread
        );
        setThreads(updatedThreads);
        setNewPostContent("");
    };

    return (
        <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
            {/* Sidebar: Thread List */}
            <aside
                style={{
                    width: "300px",
                    borderRight: "1px solid #ddd",
                    padding: "1rem",
                    background: "#f6f7fb",
                }}
            >
                <h2>Threads</h2>
                <form onSubmit={handleNewThread} style={{ marginBottom: "1rem" }}>
                    <input
                        type="text"
                        placeholder="New thread title"
                        value={newThreadTitle}
                        onChange={(e) => setNewThreadTitle(e.target.value)}
                        style={{ width: "80%", padding: "0.5rem" }}
                    />
                    <button type="submit" style={{ padding: "0.5rem", marginLeft: "0.5rem" }}>
                        +
                    </button>
                </form>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {threads.map((thread) => (
                        <li
                            key={thread.id}
                            onClick={() => setSelectedThread(thread)}
                            style={{
                                padding: "0.5rem",
                                marginBottom: "0.5rem",
                                background: selectedThread?.id === thread.id ? "#e3e7ff" : "#fff",
                                borderRadius: "6px",
                                cursor: "pointer",
                                border: "1px solid #ddd",
                            }}
                        >
                            <strong>{thread.title}</strong>
                            <div style={{ fontSize: "0.9em", color: "#666" }}>
                                by {thread.author} • {thread.posts.length} posts
                            </div>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main: Posts in Selected Thread */}
            <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
                {selectedThread ? (
                    <>
                        <h2>{selectedThread.title}</h2>
                        <div style={{ marginBottom: "2rem", color: "#888" }}>
                            Started by {selectedThread.author}
                        </div>
                        <div>
                            {selectedThread.posts.map((post) => (
                                <div
                                    key={post.id}
                                    style={{
                                        marginBottom: "1rem",
                                        padding: "1rem",
                                        background: "#f1f3f7",
                                        borderRadius: "6px",
                                    }}
                                >
                                    <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
                                        {post.author}
                                    </div>
                                    <div>{post.content}</div>
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleNewPost} style={{ marginTop: "2rem" }}>
                            <textarea
                                rows={3}
                                placeholder="Write a reply..."
                                value={newPostContent}
                                onChange={(e) => setNewPostContent(e.target.value)}
                                style={{ width: "100%", padding: "0.5rem", borderRadius: "6px" }}
                            />
                            <button type="submit" style={{ marginTop: "0.5rem", padding: "0.5rem 1rem" }}>
                                Reply
                            </button>
                        </form>
                    </>
                ) : (
                    <div style={{ color: "#888", fontSize: "1.2em" }}>
                        Select a thread to view posts.
                    </div>
                )}
            </main>
        </div>
    );
}

export default CommunityForum;
