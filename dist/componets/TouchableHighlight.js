import * as React from 'react';
import { TouchableHighlight } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
;
const GSTouchableHighlight = (props) => {
    const generatedStyles = useGlobalStyler(props);
    return (React.createElement(TouchableHighlight, Object.assign({}, props, { style: [generatedStyles, props.style] }), props.children));
};
export default GSTouchableHighlight;
