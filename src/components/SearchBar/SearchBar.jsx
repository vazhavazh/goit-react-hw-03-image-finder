import React from 'react';
import PropTypes from "prop-types"

import {
  Header,
  Form,
  SearchInput,
  ButtonSearch,
  Span,
} from './SearchBarStyled';

export class SearchBar extends React.Component {
  state = {
    searchString: '',
  };

  handleChangeInput = e => {
    this.setState({ searchString: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.searchString) {
      alert('Please write something... ');
      return;
    }
    this.props.onSubmit(this.state.searchString);
    this.setState({ searchString: '' });
  };

  render() {
    const { searchString } = this.state;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchInput
            onChange={this.handleChangeInput}
            value={searchString}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ButtonSearch type="submit">
            <Span>Search</Span>
          </ButtonSearch>
        </Form>
      </Header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}