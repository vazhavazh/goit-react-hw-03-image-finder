import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Overlay, ModalContent, ModalImg } from './ModalStyled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onModalClose();
    }
  };
  closeModalBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };
  render() {
    const { largeImg } = this.props;

    return (
      <div>
        <Overlay onClick={this.closeModalBackdrop}>
          <ModalContent>
            <ModalImg src={largeImg} alt="large image" />
          </ModalContent>
        </Overlay>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired
};