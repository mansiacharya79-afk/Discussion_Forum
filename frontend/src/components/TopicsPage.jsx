function TopicCard({ topic, index, isAdmin, onOpen, onDeleteTopic }) {
  return (
    <div className="topic-card" style={{ animationDelay: `${index * 55}ms`, animation: 'fadeUp 0.45s ease both' }}>
      <div className="topic-card-glow" />
      <div className="topic-card-rail" />
      <div className="relative z-[1] flex items-start justify-between">
        <div className="flex-1" onClick={() => onOpen(topic)}>
          <div className="topic-card-title">{topic.title}</div>
          <div className="topic-card-meta"><span className="topic-card-dot" />by {topic.user?.username}</div>
          <div className="topic-card-description">{topic.description}</div>
        </div>
        <div className="ml-[12px] flex items-center">
          {isAdmin && (
            <button className="admin-delete-btn" onClick={() => onDeleteTopic(topic.id)}>
              Del
            </button>
          )}
          <div className="topic-card-arrow" onClick={() => onOpen(topic)}>›</div>
        </div>
      </div>
    </div>
  )
}

export default function TopicsPage({
  topicTitle,
  setTopicTitle,
  topicDescription,
  setTopicDescription,
  onCreateTopic,
  topics,
  isAdmin,
  onOpenTopic,
  onDeleteTopic,
}) {
  return (
    <div className="forum-page-wrapper">
      <div className="forum-page-header">
        <div className="forum-page-title">Explore Topics</div>
        <p className="forum-page-subtitle">Join a discussion or spark a new one</p>
      </div>

      <div className="forum-glass-card">
        <div className="forum-kicker">New Topic</div>
        <div className="forum-form-stack">
          <input
            className="forum-input"
            type="text"
            placeholder="What's this topic about?"
            value={topicTitle}
            onChange={(e) => setTopicTitle(e.target.value)}
          />
          <textarea
            className="forum-textarea mb-[8px]"
            style={{ height: 85 }}
            placeholder="Give it some context…"
            value={topicDescription}
            onChange={(e) => setTopicDescription(e.target.value)}
          />
          <div>
            <button className="forum-primary-btn" onClick={onCreateTopic}>Publish Topic <span className="forum-primary-btn-arrow">→</span></button>
          </div>
        </div>
      </div>

      <div className="forum-divider-row">
        <div className="forum-divider-line" />
        <span className="forum-count-pill">{topics.length} Topics</span>
        <div className="forum-divider-line" />
      </div>

      <div className="forum-list-stack">
        {topics.length === 0 ? (
          <div className="forum-empty-state"><div className="forum-empty-icon">🌌</div>No topics yet — be the first explorer!</div>
        ) : (
          topics.map((topic, index) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              index={index}
              isAdmin={isAdmin}
              onOpen={onOpenTopic}
              onDeleteTopic={onDeleteTopic}
            />
          ))
        )}
      </div>
    </div>
  )
}
