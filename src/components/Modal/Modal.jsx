import React, { Component } from 'react';
import styled from 'styled-components';

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
            <ModalImg src={largeImg} alt="" />
          </ModalContent>
        </Overlay>
      </div>
    );
  }
}



const Overlay = styled.div`
overflow: hidden;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.863);
`;

const ModalContent = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ModalImg = styled.img`
  min-width: 100%;
  min-height: 100%;
`;
