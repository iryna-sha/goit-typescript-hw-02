import { Image } from '../../types/image';
import { ImageCard } from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'

interface ImageGalleryType {
    images: Image[];
    onImageClick: (image: Image) => void;
}

export const ImageGallery: React.FC<ImageGalleryType> = ({ images, onImageClick }) => {
    return (

        <ul className={s.list}>
            {images.map(image => (
                <ImageCard key={image.id} image={image} onClick={onImageClick} />
            ))}
        </ul>

    );
};






