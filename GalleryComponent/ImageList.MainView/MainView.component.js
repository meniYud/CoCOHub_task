import React, {useState, useEffect} from 'react';
import imageGetter from './MainView.connect';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal/Modal';

export default function MainviewComponent(props) {
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chosenImage, setChosenImage] = useState('');

    useEffect(() => {
        async function getImages() {
            if (!images.length) {
                setLoading(true);
                const loadedImages = await imageGetter();
                setImages(loadedImages);
                setLoading(false);
            }
        }
        getImages();
    }, []);

    const openModal = (image) => {
        setShowModal(true);
        setChosenImage(image);
    }

    const closeModalCB = () => setShowModal(false);
    const imageGalleryProps = {
        loading,
        images,
        showModalCB: (image) => openModal(image)
    };

    const modalProps = {
        closeModalCB
    };

    return (
        <>
            <ImageGallery { ...imageGalleryProps } />
            {
                showModal && (
                    <Modal {...modalProps}>
                        <img
                            className='chosen-img'
                            src={chosenImage.download_url}
                            alt={chosenImage.author}
                            loading="lazy"
                        />
                    </Modal>
                )
            }
        </>
    )
}
