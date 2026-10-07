import TopBar from './TopBar'

export default function ForumViewShell({
  loggedInUser,
  isAdmin,
  initials,
  onLogout,
  onPostsPage,
  onTopicPage,
  currentView,
  showAdmin,
  children,
}) {
  return (
    <>
      <TopBar
        loggedInUser={loggedInUser}
        isAdmin={isAdmin}
        initials={initials}
        onLogout={onLogout}
        onPostsPage={onPostsPage}
        onTopicPage={onTopicPage}
        currentView={currentView}
        showAdmin={showAdmin}
      />
      {children}
    </>
  )
}
