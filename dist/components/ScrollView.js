import * as React from 'react';
import { ScrollView } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
;
const GSScrollView = (props) => {
    const generatedStyles = useGlobalStyler(props);
    return (React.createElement(ScrollView, Object.assign({}, props, { style: [generatedStyles, props.style] }), props.children));
};
export default GSScrollView;
