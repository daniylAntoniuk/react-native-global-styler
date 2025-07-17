import * as React from 'react';
import { TouchableHighlight, TouchableHighlightProps } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';

interface GSTouchableHighlightProps extends BaseGlobalStyles, TouchableHighlightProps {};

const GSTouchableHighlight = (props: GSTouchableHighlightProps) => {
    const generatedStyles = useGlobalStyler(props);
    return (
        <TouchableHighlight {...props} style={[generatedStyles, props.style]}>
            {props.children}
        </TouchableHighlight>
    )
}

export default GSTouchableHighlight;