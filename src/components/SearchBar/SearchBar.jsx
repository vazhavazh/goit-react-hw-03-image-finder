import React from 'react';
import styled from 'styled-components';


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
     alert('Заповніть, будь ласка, ваш інпут!');
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
            autofocus
            placeholder="Search images and photos"
          />
          <ButtonSearch>
            <Span>Search</Span>
          </ButtonSearch>
        </Form>
      </Header>
    );
  }
}

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
const ButtonSearch = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;