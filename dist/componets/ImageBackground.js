import * as React from 'react';
import { ImageBackground } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
;
const GSImageBackground = (props) => {
    const generatedStyles = useGlobalStyler(props);
    const generatedImageStyles = useGlobalStyler(props, 'image_');
    return (React.createElement(ImageBackground, Object.assign({}, props, { imageStyle: [generatedImageStyles, props.imageStyle], style: [generatedStyles, props.style] }), props.children));
};
export default GSImageBackground;
