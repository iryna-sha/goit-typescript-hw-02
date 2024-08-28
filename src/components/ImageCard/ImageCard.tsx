

import { Image } from '../../types/image';
import s from './ImageCard.module.css'
interface ImageCardType {
    image: Image;
    onClick: (image: Image) => void;
}
export const ImageCard: React.FC<ImageCardType> = ({ image, onClick }) => {
    return (
        <li className={s.imageCard} >
            <img src={image.urls.small} alt={image.alt_description || 'Image'} onClick={() => onClick(image)} />
        </li>
    )
}




