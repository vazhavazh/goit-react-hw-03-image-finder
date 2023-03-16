import styled from 'styled-components';

export const Overlay = styled.div`
  overflow: hidden;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.863);
`;

export const ModalContent = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
