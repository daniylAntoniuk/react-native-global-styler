import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
;
const GSTouchableOpacity = (props) => {
    const generatedStyles = useGlobalStyler(props);
    return (React.createElement(TouchableOpacity, Object.assign({}, props, { style: [generatedStyles, props.style] }), props.children));
};
export default GSTouchableOpacity;
