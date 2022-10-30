import { useEffect } from 'react';
import { Backdrop, ModalWindow, LargeImage } from './Modal.styled';

export const Modal = ({ image, alt, closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

  return (
    <Backdrop onClick={closeModal} id="backdrop">
      <ModalWindow>
        <LargeImage src={image} alt={alt}></LargeImage>
      </ModalWindow>
    </Backdrop>
  );
};
