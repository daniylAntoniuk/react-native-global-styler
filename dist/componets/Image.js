import * as React from 'react';
import { Image } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
;
const GSImage = (props) => {
    const generatedStyles = useGlobalStyler(props);
    return (React.createElement(Image, Object.assign({}, props, { style: [generatedStyles, props.style] })));
};
export default GSImage;
