import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import BaseGlobalStyles from "./types/BaseGlobalStyles";
import ImageGlobalStyles from "./types/ImageGlobalStyles";
import TextGlobalStyles from "./types/TextGlobalStyles";
export type CombinedStyle = ViewStyle & ImageStyle & TextStyle;
export type GlobalStyles = BaseGlobalStyles & ImageGlobalStyles & TextGlobalStyles;
export declare const GlobalMatcher: {
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
    resize_cover: {
        key: string;
        value: string;
    };
    resize_contain: {
        key: string;
        value: string;
    };
    resize_stretch: {
        key: string;
        value: string;
    };
    resize_center: {
        key: string;
        value: string;
    };
    resize_repeat: {
        key: string;
        value: string;
    };
    relative: {
        key: string;
        value: string;
    };
    absolute: {
        key: string;
        value: string;
    };
    border: {
        key: string;
        value: number;
    };
    alignSelf_start: {
        key: string;
        value: string;
    };
    alignSelf_end: {
        key: string;
        value: string;
    };
    justify_start: {
        key: string;
        value: string;
    };
    justify_end: {
        key: string;
        value: string;
    };
    align_start: {
        key: string;
        value: string;
    };
    align_end: {
        key: string;
        value: string;
    };
    flex: {
        key: string;
        value: number;
    };
    flexGrow: {
        key: string;
        value: number;
    };
    column: {
        key: string;
        value: string;
    };
    row: {
        key: string;
        value: string;
    };
    wrap: {
        key: string;
        value: string;
    };
    'nowrap ': {
        key: string;
        value: string;
    };
};
declare const useGlobalStyler: (keys: GlobalStyles, prefix?: string) => CombinedStyle;
export default useGlobalStyler;
