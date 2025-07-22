import * as React from 'react';
import { View } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
;
const GSView = (props) => {
    const generatedStyles = useGlobalStyler(props);
    return (React.createElement(View, Object.assign({}, props, { style: [generatedStyles, props.style] }), props.children));
};
export default GSView;
