import React from 'react';
import './search.css';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

class Search extends React.PureComponent {
  inputChange = e => {
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
              onChange={this.inputChange}
            />
            <Button className="search-container__button">Search</Button>
          </div>
          <div className="search-container__result">
            {users.length
              ? users.map(item => (
                  <Link
                    key={item.id}
                    to={`/user/${item.id}`}
                    id="search-container__link"
                  >
                    <div className="search-container__people">
                      <div className="search-container__people-container-image">
                        <div
                          className="search-container__people-image"
                          style={{ backgroundImage: `url(${item.avatar_url})` }}
                        />
                      </div>
                      <div className="search-container__people-login">
                        {item.login}
                      </div>
                    </div>
                  </Link>
                ))
              : 'No Results...'}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
