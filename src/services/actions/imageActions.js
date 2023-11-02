import { SELECT_IMAGE, DESELECT_IMAGE, DELETE_SELECTED_IMAGES, IMAGE_GALLERY } from '../constants/selectConstants'

export const selectImage = (image) => {
    return {
        type: SELECT_IMAGE,
        payload: image,
    };
};


export const deselectImage = (image) => {
    return {
        type: DESELECT_IMAGE,
        payload: image,
    };
};

export const deleteSelectedImages = () => {
    return {
        type: DELETE_SELECTED_IMAGES,
    };
};

export const imageGallery = (image) => {
    return {
        type: IMAGE_GALLERY,
        payload: image,
    };
};