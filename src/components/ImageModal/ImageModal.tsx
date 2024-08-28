import React from 'react';
import ReactModal from 'react-modal';
import s from './ImageModal.module.css';
import { Image } from '../../types/image';

ReactModal.setAppElement('#root');

interface ImageModalType {
    onClose: () => void;
    image: Image | null;
}

export const ImageModal: React.FC<ImageModalType> = ({ image, onClose }) => {
    return (
        <ReactModal
            isOpen={!!image}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            className={s.modal}
            overlayClassName={s.overlay}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
        >
            <button onClick={onClose} className={s.closeButton}>X</button>
            {image && (
                <>
                    <img src={image.urls.regular} alt={image.alt_description} className={s.image} />
                    <div className={s.details}>
                        <p><span>Description:</span> {image.description || image.alt_description}</p>
                        <p><span>Author:</span> {image.user.name}</p>
                        <p><span>Likes:</span> {image.likes}</p>
                    </div>
                </>
            )}
        </ReactModal>
    );
};



