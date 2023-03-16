import React, { Component } from 'react';

import { ProgressBar } from 'react-loader-spinner';
import { GetImages } from '../api/GetImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Modal } from './Modal/Modal';
import { ButtonLoadMore } from './ButtonLoadMore/ButtonLoadMore';

import { Span, MainContainer, Preloader } from './AppStyled';

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
    searchQuery: '',
    status: statusList.idle,
    currentPage: 1,
    isOpen: false,
    largeImg: '',
    hasMoreImages: false,
    hasImages: false,
  };
  handleSubmit = str => {
    this.setState({
      searchQuery: str,
      images: [],
      hasImages: false,
    });
  };

  handleGetImages = async () => {
    this.setState({
      status: statusList.loading,
      hasImages: true,
      hasMoreImages: true,
    });
    try {
      const res = await GetImages(
        this.state.searchQuery,
        this.state.currentPage
      );
      if (res.data.hits.length === 0) {
        this.setState({
          hasImages: false,
          hasMoreImages: false,
        });
      }
      this.setState({
        images: res.data.hits,
        status: statusList.success,
      });
    } catch (error) {
      this.setState({ error, status: statusList.error });
    }
  };

  async componentDidMount() {
    await this.handleGetImages();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({
        currentPage: 1,
        images: [],
      });
      await this.handleGetImages();
    }

    if (prevState.currentPage !== this.state.currentPage) {
      try {
        const res = await GetImages(
          this.state.searchQuery,
          this.state.currentPage
        );
        if (res.data.hits.length === 0) {
          this.setState(prevState => ({
            currentPage: prevState.currentPage,
          }));
          this.setState({
            hasMoreImages: false,
          });
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
          status: statusList.success,
        }));
      } catch (error) {
        this.setState({ error, status: statusList.error });
      }
    }
  }
  loadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };
  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  setImg = largeImg => {
    this.setState({ largeImg });
  };

  render() {
    const { images, status, hasMoreImages, hasImages } = this.state;

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
              colors={['#e15b64', '#ff3300', '#f3f86a', '#3f51b5', '#849b87']}
            />
          </Preloader>
        </MainContainer>
      );
    }
    if (status === statusList.success || status === statusList.idle) {
      return (
        <MainContainer>
          <SearchBar onSubmit={this.handleSubmit} />
          {hasImages ? (
            <ImageGallery
              images={images}
              onClickImage={this.setImg}
              toggleModal={this.toggleModal}
            />
          ) : (
            <Span>
              I'm sorry, but I have never encountered anything like this before{' '}
            </Span>
          )}
          {this.state.isOpen && (
            <Modal
              onModalClose={this.toggleModal}
              largeImg={this.state.largeImg}
            />
          )}
          {hasMoreImages && !this.state.isOpen && (
            <ButtonLoadMore onClick={this.loadMore} />
          )}
          {!hasMoreImages && hasImages ? (
            <Span>Sorry, but there are no more images available...</Span>
          ) : (
            console.log()
          )}
        </MainContainer>
      );
    }
  }
}
