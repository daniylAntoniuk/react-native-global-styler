import * as React from 'react';
import { Pressable } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
;
const GSPressable = (props) => {
    const generatedStyles = useGlobalStyler(props);
    return (React.createElement(Pressable, Object.assign({}, props, { style: [generatedStyles, props.style] }), props.children));
};
export default GSPressable;
