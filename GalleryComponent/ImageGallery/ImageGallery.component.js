import React from 'react';
import './list.css';

export default function ImageGallery({loading, images, showModalCB}) {
    
    const getList = (width= '100px', height='100px') => {
        if (loading) {
            return <h1>Loading...</h1>;
        }
        const imageList = images?.data || [];
        return (
            <div className='image-list'>
                {imageList.map((image, index) => 
                    <img
                        key={index}
                        width={width}
                        height={height}
                        src={image.download_url}
                        alt={image.author}
                        onClick={() => showModalCB(image)} />
                )}
            </div>
        );
    }

    

    return (
        <>
            {
                images.err
                    ? <h1>{`ERROR: ${images.err?.response?.data}`}</h1>
                    : getList()
            }
        </>
    )
}
