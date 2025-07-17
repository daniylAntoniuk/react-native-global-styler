import * as React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';

interface GSTouchableOpacityProps extends BaseGlobalStyles, TouchableOpacityProps {};

const GSTouchableOpacity = (props: GSTouchableOpacityProps) => {
    const generatedStyles = useGlobalStyler(props);
    return (
        <TouchableOpacity {...props} style={[generatedStyles, props.style]}>
            {props.children}
        </TouchableOpacity>
    )
}

export default GSTouchableOpacity;