

import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { SearchBar } from '../SearchBar/SearchBar';
import { Loader } from '../Loader/Loader';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from '../ImageModal/ImageModal';
import { Image } from '../../types/image';





interface FetchDataResponse {
    results: Image[];
    total_pages: number;
}

export const App: React.FC = () => {
    const [results, setResults] = useState<Image[]>([]);
    const [query, setQuery] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);






    useEffect(() => {
        if (!query) return;
        const getImages = async (): Promise<void> => {
            try {
                setIsLoading(true);
                setError(false);
                const res: FetchDataResponse = await fetchData(query, page);
                setResults(prev => [...prev, ...res.results]);
                setIsLoadMore(false);
                if (page < res.total_pages) {
                    setIsLoadMore(true);
                }
            } catch (error) {
                setError(true);
                setIsLoadMore(false);
            } finally {
                setIsLoading(false);
            }
        };
        getImages();

    }, [query, page]);
    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };
    const handleSetQuery = (query: string) => {
        setQuery(query);
        setResults([]);
        setPage(1);
    }


    const handleImageClick = (image: Image) => {
        setSelectedImage(image);

    };

    const closeModal = () => {
        setSelectedImage(null);

    };

    return (
        <>
            <SearchBar setQuery={handleSetQuery} />
            {error && <ErrorMessage />}
            <ImageGallery images={results} onImageClick={handleImageClick} />
            {isLoading && <Loader />}
            {isLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
            {selectedImage && (
                <ImageModal image={selectedImage} onClose={closeModal} />
            )}
        </>
    )

}