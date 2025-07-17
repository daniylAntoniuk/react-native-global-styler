import ImageStyles, { ImageMatcher } from "./base/ImageStyles";
import BaseGlobalStyles from "./BaseGlobalStyles";

type ImageGlobalStyles = BaseGlobalStyles & ImageStyles ;

export const ImageGlobalMatcher = {
    ...ImageMatcher,
}

export default ImageGlobalStyles;