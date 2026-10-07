export default function TopBar({
  loggedInUser,
  isAdmin,
  initials,
  onLogout,
  onPostsPage,
  onTopicPage,
  currentView = 'topics',
  showAdmin = true,
}) {
  return (
    <nav className="topbar-nav">
      <div className="topbar-wrap">
        <div className="topbar-brand">
          <span className="topbar-star">✦</span>
          Discourse
          {showAdmin && isAdmin && <span className="topbar-admin-badge">Admin</span>}
        </div>

        <div className="topbar-switch" role="navigation" aria-label="Primary">
          <button className={`topbar-switch-btn ${currentView === 'posts' ? 'is-active' : ''}`} onClick={onPostsPage}>Posts</button>
          <button className={`topbar-switch-btn ${currentView === 'topics' ? 'is-active' : ''}`} onClick={onTopicPage}>Topics</button>
        </div>

        <div className="topbar-user-zone">
          <div className="topbar-user-chip">
            <div className="topbar-user-avatar">{initials(loggedInUser.username)}</div>
            {loggedInUser.username}
          </div>
          <button className="topbar-logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </nav>
  )
}
