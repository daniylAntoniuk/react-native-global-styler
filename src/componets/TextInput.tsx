import * as React from 'react';
import { TextInput, TextProps } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
import TextGlobalStyles from '../styles/types/TextGlobalStyles';

interface GSTextProps extends TextGlobalStyles, TextProps {};

const GSText = (props: GSTextProps) => {
    const generatedStyles = useGlobalStyler(props);
    
    return (
        <TextInput {...props} style={[generatedStyles, props.style]}/>
    )
}

export default GSText;