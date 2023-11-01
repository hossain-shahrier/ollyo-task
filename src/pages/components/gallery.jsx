// Importing Images
import { useState } from "react";

import { images } from "../../utils/images"

const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState(images);

    const handleDragStart = (e, src) => {
        e.dataTransfer.setData("text/plain", src)
    }
    const handleDragOver = (e) => {
        e.preventDefault();
    }
    // When the image is dropped, update the state
    const handleDrop = (e, src) => {
        e.preventDefault();
        const draggedSrc = e.dataTransfer.getData('text/plain');
        // Find the index of the dragged and dropped elements
        const draggedIndex = galleryImages.findIndex((img) => img.src === draggedSrc);
        const targetIndex = galleryImages.findIndex((img) => img.src === src);
        console.log(targetIndex);
        // Check the targetIndex's featured value
        const targetFeatured = galleryImages[targetIndex].featured;
        if (targetFeatured) {
            // If the target is featured, set the dragged element's featured value to true
            galleryImages[draggedIndex].featured = true;
            galleryImages[targetIndex].featured = false;
        }
        // Make a copy of the galleryImages state

        const newGalleryImages = [...galleryImages];
        const temp = newGalleryImages[draggedIndex];
        newGalleryImages[draggedIndex] = newGalleryImages[targetIndex];
        newGalleryImages[targetIndex] = temp;

        setGalleryImages(newGalleryImages);
    }

    return (
        <div className="my-16 h-full">
            <div className='px-6 py-6'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"

                >
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className={`
                            cursor-grabbing
                            w-full 
                            rounded-2xl
                            border-2
                            ${image && image.featured && "row-start-1 col-start-1 col-end-3 lg:row-start-1 lg:col-start-1 lg:row-end-3 lg:col-end-3 md:row-start-1 md:col-start-1 md:row-end-3 md:col-end-3"}`}
                            draggable="true"
                            onDragOver={handleDragOver}
                            onDragStart={(e) => handleDragStart(e, image.src)}
                            onDrop={(e) => handleDrop(e, image.src)}
                        >
                            {image && (
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full rounded-2xl"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Gallery;
