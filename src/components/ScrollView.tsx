import * as React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';

interface GSScrollViewProps extends BaseGlobalStyles, ScrollViewProps {};

const GSScrollView = (props: GSScrollViewProps) => {
    const generatedStyles = useGlobalStyler(props);
    return (
        <ScrollView {...props} style={[generatedStyles, props.style]}>
            {props.children}
        </ScrollView>
    )
}

export default GSScrollView;