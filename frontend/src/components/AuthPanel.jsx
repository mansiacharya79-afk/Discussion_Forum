export default function AuthPanel({
  page,
  setPage,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  message,
  onSubmit,
}) {
  return (
    <div className="auth-screen">
      <div className="auth-panel">
        <div className="auth-content-layer auth-brand"> Discourse</div>
        <p className="auth-content-layer auth-tagline">where ideas travel at the speed of thought</p>

        <div className="auth-content-layer auth-tabs">
          <button className={`auth-tab-btn ${page === 'register' ? 'is-active' : ''}`} onClick={() => setPage('register')}>
            Register
          </button>
          <button className={`auth-tab-btn ${page === 'login' ? 'is-active' : ''}`} onClick={() => setPage('login')}>
            Sign In
          </button>
        </div>

        <div className="auth-content-layer auth-form">
          {page === 'register' && (
            <>
              <input
                className="auth-input-soft"
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="auth-input"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}

          {page === 'login' && (
            <input
              className="auth-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-submit-btn" onClick={onSubmit}>
            {page === 'register' ? 'Create Account →' : 'Sign In →'}
          </button>
        </div>

        {message && (
          <div className="auth-content-layer auth-message">
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
