import * as React from 'react';
import { View, ViewProps } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';

interface GSViewProps extends BaseGlobalStyles, ViewProps {};

const GSView = (props: GSViewProps) => {
    
    const generatedStyles = useGlobalStyler(props);
    return (
        <View {...props} style={[generatedStyles, props.style]}>
            {props.children}
        </View>
    )
}

export default GSView;