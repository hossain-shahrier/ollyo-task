// Importing Images
import ImageCard from "../../components/image-card"
import { images } from "../../utils/images"

const Gallery = () => {

    return (
        <div className="mt-16">
            <div className='px-6 py-6'>
                <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {images.map((image) => (
                        <ImageCard
                            key={image.id}
                            src={image.src}
                            alt={image.alt}
                            className={`w-full rounded-2xl border-2
                             ${image.featured && "row-start-1 col-start-1 col-end-3  lg:row-start-1 lg:col-start-1 lg:row-end-3 lg:col-end-3 md:row-start-1 md:col-start-1  md:row-end-3 md:col-end-3"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery