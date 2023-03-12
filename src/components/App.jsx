import React, { Component } from 'react';

import { fetchImagesByQuery } from './Fetch';

const statusList = {
  loading: 'loading',
  success: 'success',
  error: 'error',
  reject: 'reject',
  idle: 'idle',
};

export class App extends Component {
  state = {
    images: [],
    error: null,
    searchQuery: 'batman',
    status: statusList.idle,
  };

  handleSubmit = str => {
    this.setState({ searchQuery: str });
  };

  handleGetImages = async () => {
    try {
      this.setState({ status: statusList.loading });
      const result = await fetchImagesByQuery(this.state.searchQuery);
      // console.log(result);
      this.setState({ images: result.hits, status: statusList.success });
    } catch (error) {
      this.setState({ status: statusList.error });
      console.error(error);
    }
  };

  componentDidMount() {
    this.handleGetImages();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.handleGetImages();
    }
  }

  render() {
    const { images, status } = this.state;
    if (status === statusList.loading) {
      return (
        <>
          <header className="searchbar">
  <form className="form" onSubmit={this.handleSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
            
       
        </>
      )
    }
    return (
      <>
        <button
          type="button"
          onClick={() => {
            this.handleGetImages();
          }}
        ></button>
      </>
    );
  }
}
