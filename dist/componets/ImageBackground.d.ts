import { ImageBackgroundProps } from 'react-native';
import ImageGlobalStyles from '../styles/types/ImageGlobalStyles';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';
type ImageProps = {
    [T in keyof ImageGlobalStyles as `image_${T}`]?: boolean;
};
interface GSImageBackgroundProps extends BaseGlobalStyles, ImageProps, ImageBackgroundProps {
}
declare const GSImageBackground: (props: GSImageBackgroundProps) => any;
export default GSImageBackground;
