import React from 'react';
import './profile.css';

class Profile extends React.PureComponent {
  componentDidMount() {
    this.props.onLoadDataCurrentUser(this.props.match.params.id);
  }
  render() {
    const {user} = this.props;
    if (this.props.loading) {
      return <div />;
    }
    return (
      <div className="profile">
        <div className="profile__main" onClick={this.click}>
          <div
            className="profile__avatar"
            onClick={this.click}
            style={{backgroundImage: `url(${user.get('avatar_url')})`}}
          />
          <div className="profile__login">{user.get('login')}</div>
          <div className="profile__info">
            <div className="profile__nameRepo">dwdw</div>
            <div className="profile__descRepo">dwdw</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
