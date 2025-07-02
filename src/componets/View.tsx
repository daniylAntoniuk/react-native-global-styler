import * as React from 'react';
import { View, ViewProps } from 'react-native';

type GSViewProps = ViewProps;

const GSView = (props: GSViewProps) => {
    
    return (
        <View {...props} style={{}}>
            {props.children}
        </View>
    )
}
