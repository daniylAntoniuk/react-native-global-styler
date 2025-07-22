import { TextStyle } from "react-native";
import Nums from "./Nums";
declare const TxtMatcher: {
    size_xs: {
        key: string;
        value: number;
    };
    size_sm: {
        key: string;
        value: number;
    };
    size_md: {
        key: string;
        value: number;
    };
    size_lg: {
        key: string;
        value: number;
    };
    size_xl: {
        key: string;
        value: number;
    };
    size_2xl: {
        key: string;
        value: number;
    };
};
export declare const TextMatcher: {
    size_xs: {
        key: string;
        value: number;
    };
    size_sm: {
        key: string;
        value: number;
    };
    size_md: {
        key: string;
        value: number;
    };
    size_lg: {
        key: string;
        value: number;
    };
    size_xl: {
        key: string;
        value: number;
    };
    size_2xl: {
        key: string;
        value: number;
    };
};
type TextStyles = {
    [T in TextStyle["fontWeight"] as `weight_${T}`]?: boolean;
} & {
    [T in TextStyle["fontStyle"] as `fontStyle_${T}`]?: boolean;
} & {
    [T in TextStyle["textDecorationLine"] as `decoration_${T}`]?: boolean;
} & {
    [T in TextStyle["textAlign"] as `textAlign_${T}`]?: boolean;
} & {
    [T in TextStyle["textTransform"] as `textTransform_${T}`]?: boolean;
} & {
    [N in Nums as `size_${N}`]?: boolean;
} & {
    [N in Nums as `size_${N}`]?: boolean;
} & {
    [N in keyof typeof TxtMatcher as `${N}`]?: boolean;
};
export default TextStyles;
