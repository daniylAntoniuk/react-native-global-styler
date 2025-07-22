import * as React from 'react';
import { TextInput } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
;
const GSText = (props) => {
    const generatedStyles = useGlobalStyler(props);
    return (React.createElement(TextInput, Object.assign({}, props, { style: [generatedStyles, props.style] })));
};
export default GSText;
