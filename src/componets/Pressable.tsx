import * as React from 'react';
import { Pressable, PressableProps } from 'react-native';
import useGlobalStyler from '../styles/useGlobalStyler';
import BaseGlobalStyles from '../styles/types/BaseGlobalStyles';

interface GSPressableProps extends BaseGlobalStyles, PressableProps {};

const GSPressable = (props: GSPressableProps) => {
    const generatedStyles = useGlobalStyler(props);
    return (
        <Pressable {...props} style={[generatedStyles, props.style]}>
            {props.children}
        </Pressable>
    )
}

export default GSPressable;