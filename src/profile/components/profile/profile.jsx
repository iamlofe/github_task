import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import { history } from '../../../main/tools/history-tool';

import './profile.scss';

class Profile extends React.PureComponent {
  static propTypes = {
    isLoadingUser: PropTypes.bool.isRequired,
    avatarUrl: PropTypes.string,
    login: PropTypes.string,
    repos: PropTypes.instanceOf(List)
  };

  componentDidMount() {
    this.props.onLoadDataCurrentUser(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.onClearStore();
  }

  moveBack = () => {
    history.goBack();
  };

  render() {
    const { avatarUrl, login, repos, isLoadingUser } = this.props;

    if (isLoadingUser) {
      return <div />;
    }

    return (
      <div className="profile">
        <div className="profile__main" onClick={this.test}>
          <div
            className="profile__avatar"
            onClick={this.click}
            style={{
              backgroundImage: `url(${avatarUrl})`
            }}
          />
          <div className="profile__login">
            <h2 className="profile__login-title">{login}</h2>
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

                  <div className="profile__issues">{repo.issues}</div>
                </div>
              ))
            : ''}
        </div>
      </div>
    );
  }
}

export default Profile;
