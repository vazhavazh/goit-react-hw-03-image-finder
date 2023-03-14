import React, { Component } from 'react';


import styled from 'styled-components';
import { ProgressBar } from 'react-loader-spinner';
import { Fetch } from './Fetch';
import {ImageGallery} from './ImageGallery/ImageGallery'
import { SearchBar } from './SearchBar/SearchBar';

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
    searchQuery: 'cars',
    status: statusList.idle,
  };
  handleSubmit = str => {
    this.setState({ searchQuery: str });
  };

  handleGetImages = async () => {
    try {
      this.setState({ status: statusList.loading });
      const res = await Fetch(this.state.searchQuery);
      this.setState({ images: res.hits, status: statusList.success });
    } catch (error) {
      this.setState({ error, status: statusList.error });
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
        <MainContainer>
          <SearchBar onSubmit={this.handleSubmit} />
          <Preloader>
            <ProgressBar
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#ff3300', '#f8b26a', '#b3ff00', '#849b87']}
            />
            <h1>Loading....</h1>
          </Preloader>
        </MainContainer>
      );
    }
    if (status === statusList.success || status === statusList.idle) {
      return (
        <>
          <SearchBar onSubmit={this.handleSubmit} />
          <ImageGallery images={images}/>
        </>
      );
    }
    if (status === statusList.error && status !== statusList.loading) {
      return <h1>Жодної картинки не знайдено, зробіть інший запит</h1>;
    }
  }
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

const Preloader = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
