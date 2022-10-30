import { useState } from 'react';
import { PhotoCard, Image } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';

export const GalleryItem = ({ previewImgSRC, largeImgSRC, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = e => {
    if (e.target.id === 'backdrop' || e.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <PhotoCard onClick={openModal}>
        <Image src={previewImgSRC} alt={alt} />
      </PhotoCard>
      {isModalOpen && <Modal image={largeImgSRC} closeModal={closeModal} />}
    </>
  );
};
