import { ImageProps } from 'react-native';
import ImageGlobalStyles from '../styles/types/ImageGlobalStyles';
interface GSImageProps extends ImageGlobalStyles, ImageProps {
}
declare const GSImage: (props: GSImageProps) => any;
export default GSImage;
