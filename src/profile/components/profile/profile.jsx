import React from 'react';
import './profile.scss';

class Profile extends React.PureComponent {
  componentDidMount() {
    this.props.onLoadDataCurrentUser(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.onClearStore();
  }
  render() {
    const {
      user,
      repos,
      issues,
      isLoadingUser,
      isLoadingRepos,
      isLoadingIssues
    } = this.props;
    if (isLoadingUser && isLoadingIssues && isLoadingRepos) {
      return <div />;
    }
    return (
      <div className="profile">
        <div className="profile__main" onClick={this.test}>
          {!isLoadingUser && (
            <div
              className="profile__avatar"
              onClick={this.click}
              style={{
                backgroundImage: `url(${user.get('avatar_url')})`
              }}
            />
          )}
          <div className="profile__login">
            <h2 className="profile__login-title">
              {!isLoadingUser ? user.get('login') : '...'}
            </h2>
          </div>
          {repos
            ? repos.map((repo, i) => (
                <div className="profile__info" key={repo.get('name')}>
                  <div className="profile__nameRepo">{repo.get('name')}</div>
                  <div className="profile__descRepo">
                    {repo.get('descRepo') ? (
                      repo.get('descRepo')
                    ) : (
                      <small>No description... :(</small>
                    )}
                  </div>

                  <div className="profile__issues">
                    {isLoadingIssues ? issues.get(i) : '.'}
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
    );
  }
}
export default Profile;
