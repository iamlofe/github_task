import React from 'react';
import './profile.scss';

class Profile extends React.PureComponent {
  componentDidMount() {
    this.props.onLoadDataCurrentUser(this.props.match.params.id);
  }
  test = () => {
    console.log(this.props);
  };
  render() {
    const { user, repos, lengthIssues } = this.props;
    if (this.props.isLoading) {
      return <div />;
    }
    return (
      <div className="profile">
        <div className="profile__main" onClick={this.test}>
          <div
            className="profile__avatar"
            onClick={this.click}
            style={{ backgroundImage: `url(${user.get('avatar_url')})` }}
          />
          <div className="profile__login">{user.get('login')}</div>
          {repos &&
            repos.map((repo, i) => (
              <div className="profile__info" key={repo.get('name')}>
                <div className="profile__nameRepo">{repo.get('name')}</div>
                <div className="profile__descRepo">{repo.get('descRepo')}</div>

                <div className="profile__issues">{lengthIssues.get(i)}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default Profile;
