import * as React from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
import ImageGlobalStyles from '../styles/types/ImageGlobalStyles';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';


type ImageProps = {
    [T in keyof ImageGlobalStyles as `image_${T}`]?: boolean
};
interface GSImageBackgroundProps extends BaseGlobalStyles, ImageProps, ImageBackgroundProps { };

const GSImageBackground = (props: GSImageBackgroundProps) => {
    const generatedStyles = useGlobalStyler(props);
    const generatedImageStyles = useGlobalStyler(props, 'image_');

    return (
        <ImageBackground {...props} imageStyle={[generatedImageStyles, props.imageStyle]} style={[generatedStyles, props.style]}>
            {props.children}
        </ImageBackground>
    )
}

export default GSImageBackground;