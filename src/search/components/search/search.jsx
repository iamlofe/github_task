import React from 'react';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List } from 'immutable';

import './search.scss';

class Search extends React.PureComponent {
  onInputChange = e => {
    this.props.onInputChange(e.target.value);
  };

  render() {
    const { users } = this.props;

    return (
      <div className="search-container">
        <div className="search-container__main">
          <div className="search-container__input-container">
            <div className="search-container__title">
              <h1>GITHUB BROWSER</h1>
            </div>
            <Input
              placeholder="Input username..."
              onChange={this.onInputChange}
            />
          </div>
          <div className="search-container__result">
            {users.count()
              ? users.map(user => (
                  <Link
                    key={user.get('id')}
                    to={`/user/${user.get('login')}`}
                    id="search-container__link"
                  >
                    <div className="search-container__people">
                      <div className="search-container__people-container-image">
                        <div
                          className="search-container__people-image"
                          style={{
                            backgroundImage: `url(${user.get('avatar_url')})`
                          }}
                        />
                      </div>
                      <div className="search-container__people-login">
                        {user.get('login')}
                      </div>
                    </div>
                  </Link>
                ))
              : 'No results...'}
          </div>
        </div>
      </div>
    );
  }
}
Search.propTypes = {
  users: PropTypes.instanceOf(List).isRequired
};

export default Search;
