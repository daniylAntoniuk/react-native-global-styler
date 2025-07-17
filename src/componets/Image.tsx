import * as React from 'react';
import { Image, ImageProps } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
import ImageGlobalStyles from '../styles/types/ImageGlobalStyles';

interface GSImageProps extends ImageGlobalStyles, ImageProps {};

const GSImage = (props: GSImageProps) => {
    const generatedStyles = useGlobalStyler(props);
    
    return (
        <Image {...props} style={[generatedStyles, props.style]}/>
    )
}

export default GSImage;