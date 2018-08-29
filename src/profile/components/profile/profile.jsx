import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { history } from '../../../main/history/history';

import './profile.scss';

class Profile extends React.PureComponent {
  componentDidMount() {
    this.props.onLoadDataCurrentUser(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.onClearStore();
  }
  moveBack = () => {
    history.push('/search');
  };
  render() {
    const { avatar_url, login, repos, isLoadingUser } = this.props;

    if (isLoadingUser) {
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
                backgroundImage: `url(${avatar_url})`
              }}
            />
          )}
          <div className="profile__login">
            <h2 className="profile__login-title">
              {!isLoadingUser ? login : '...'}
            </h2>
          </div>
          <Button onClick={this.moveBack} className="profile__button-back">
            Back
          </Button>
          {repos.count()
            ? repos.map((repo, i) => (
                <div className="profile__info" key={i}>
                  <div className="profile__nameRepo">{repo.name}</div>
                  <div className="profile__descRepo">
                    {repo.descRepo ? (
                      repo.descRepo
                    ) : (
                      <small>No description... :(</small>
                    )}
                  </div>

                  <div className="profile__issues">{}</div>
                </div>
              ))
            : ''}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  avatar_url: PropTypes.string,
  login: PropTypes.string,
  repos: PropTypes.instanceOf(List)
};
export default Profile;
