import { Navigate, Route, Routes } from 'react-router-dom'
import AuthPanel from './components/AuthPanel'
import CosmicBackground from './components/CosmicBackground'
import ForumViewShell from './components/ForumViewShell'
import Particles from './components/Particles'
import PostsPage from './components/PostsPage'
import TopicsPage from './components/TopicsPage'
import useForumController from './hooks/useForumController'

export default function App() {
  const forum = useForumController()

  const guardAuth = (element) => (forum.loggedInUser ? element : <Navigate to="/login" replace />)
  const guardGuest = (element) => (forum.loggedInUser ? <Navigate to="/topics" replace /> : element)
  const postsRouteElement = guardAuth(
    <ForumViewShell {...forum.forumShellProps} currentView="posts" showAdmin={false}>
      <PostsPage
        selectedTopic={forum.selectedTopic}
        postContent={forum.postContent}
        setPostContent={forum.setPostContent}
        onCreatePost={forum.handleCreatePost}
        posts={forum.posts}
        isAdmin={forum.isAdmin}
        initials={forum.initials}
        onDeletePost={forum.handleDeletePost}
        onLoadComments={forum.loadComments}
        comments={forum.comments}
        commentText={forum.commentText}
        setCommentText={forum.setCommentText}
        onAddComment={forum.handleAddComment}
        onDeleteComment={forum.handleDeleteComment}
      />
    </ForumViewShell>
  )

  return (
    <>
      <CosmicBackground />
      <Particles />

      <div className="relative z-[2]">
        <Routes>
          <Route path="/" element={<Navigate to={forum.loggedInUser ? '/topics' : '/register'} replace />} />
          <Route path="/register" element={guardGuest(<AuthPanel page="register" {...forum.authPanelProps} onSubmit={forum.handleRegister} />)} />
          <Route path="/login" element={guardGuest(<AuthPanel page="login" {...forum.authPanelProps} onSubmit={forum.handleLogin} />)} />

          <Route
            path="/topics"
            element={guardAuth(
              <ForumViewShell {...forum.forumShellProps} currentView="topics" showAdmin>
                <TopicsPage
                  topicTitle={forum.topicTitle}
                  setTopicTitle={forum.setTopicTitle}
                  topicDescription={forum.topicDescription}
                  setTopicDescription={forum.setTopicDescription}
                  onCreateTopic={forum.handleCreateTopic}
                  topics={forum.topics}
                  isAdmin={forum.isAdmin}
                  onOpenTopic={forum.openTopicRoute}
                  onDeleteTopic={forum.handleDeleteTopic}
                />
              </ForumViewShell>
            )}
          />
          <Route path="/topics/:topicId/:topicSlug" element={postsRouteElement} />
          <Route path="/topics/:topicId" element={postsRouteElement} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}
