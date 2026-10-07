function PostCard({
  post,
  index,
  isAdmin,
  initials,
  onDeletePost,
  onLoadComments,
  comments,
  commentText,
  setCommentText,
  onAddComment,
  onDeleteComment,
}) {
  return (
    <div className="post-card" style={{ animationDelay: `${index * 55}ms`, animation: 'fadeUp 0.45s ease both' }}>
      <div className="post-card-topline" />
      <div className="post-user-row">
        <div className="user-pill"><div className="user-avatar">{initials(post.user?.username)}</div>{post.user?.username}</div>
        {isAdmin && (
          <button className="admin-delete-btn" onClick={() => onDeletePost(post.id)}>
            Delete
          </button>
        )}
      </div>

      <p className="post-content">{post.content}</p>

      <button className="comments-toggle-btn" onClick={() => onLoadComments(post.id)}>💬 Comments</button>

      {comments[post.id] && (
        <div className="comments-stack">
          {comments[post.id].length === 0 ? (
            <p className="comment-empty">No comments yet.</p>
          ) : (
            comments[post.id].map((comment) => (
              <div key={comment.id} className="comment-row">
                <div>
                  <span className="comment-author">{comment.user?.username}</span>
                  <span className="comment-text">{comment.content}</span>
                </div>
                {isAdmin && (
                  <button className="admin-delete-btn" onClick={() => onDeleteComment(comment.id, post.id)}>Del</button>
                )}
              </div>
            ))
          )}
        </div>
      )}

      <div className="comment-input-row">
        <input
          className="forum-comment-input"
          type="text"
          placeholder="Add a comment…"
          value={commentText[post.id] || ''}
          onChange={(e) => setCommentText((prev) => ({ ...prev, [post.id]: e.target.value }))}
        />
        <button className="send-btn" onClick={() => onAddComment(post)}>Send ↑</button>
      </div>
    </div>
  )
}

export default function PostsPage({
  selectedTopic,
  postContent,
  setPostContent,
  onCreatePost,
  posts,
  isAdmin,
  initials,
  onDeletePost,
  onLoadComments,
  comments,
  commentText,
  setCommentText,
  onAddComment,
  onDeleteComment,
}) {
  return (
    <div className="forum-page-wrapper">
      <div className="forum-page-header">
        <div className="forum-page-title">{selectedTopic?.title}</div>
        <p className="forum-page-subtitle">{selectedTopic?.description}</p>
      </div>

      <div className="forum-glass-card">
        <div className="forum-kicker">Write a Post</div>
        <textarea
          className="forum-textarea mb-[8px]"
          style={{ height: 100 }}
          placeholder="Share something worth reading…"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button className="forum-primary-btn" onClick={onCreatePost}>Post Reply <span className="forum-primary-btn-arrow">→</span></button>
      </div>

      <div className="forum-divider-row">
        <div className="forum-divider-line" />
        <span className="forum-count-pill">{posts.length} Posts</span>
        <div className="forum-divider-line" />
      </div>

      <div className="forum-list-stack">
        {posts.length === 0 ? (
          <div className="forum-empty-state"><div className="forum-empty-icon">✍️</div>No posts yet. Start the conversation!</div>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              index={index}
              isAdmin={isAdmin}
              initials={initials}
              onDeletePost={onDeletePost}
              onLoadComments={onLoadComments}
              comments={comments}
              commentText={commentText}
              setCommentText={setCommentText}
              onAddComment={onAddComment}
              onDeleteComment={onDeleteComment}
            />
          ))
        )}
      </div>
    </div>
  )
}
