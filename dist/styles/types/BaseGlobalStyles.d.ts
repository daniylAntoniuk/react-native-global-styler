import BorderStyles from "./base/BorderStyles";
import FlexStyles from "./base/FlexStyles";
import LayoutStyles from "./base/LayoutStyles";
type BaseGlobalStyles = FlexStyles & BorderStyles & LayoutStyles;
export declare const BaseMatcher: {
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
export default BaseGlobalStyles;
