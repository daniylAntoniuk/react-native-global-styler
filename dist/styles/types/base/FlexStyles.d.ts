import Nums from "./Nums";
type FlexAlignType = 'center' | 'stretch' | 'baseline';
declare const AlignMatcher: {
    align_start: {
        key: string;
        value: string;
    };
    align_end: {
        key: string;
        value: string;
    };
};
declare const AlignSMatcher: {
    alignSelf_start: {
        key: string;
        value: string;
    };
    alignSelf_end: {
        key: string;
        value: string;
    };
};
declare const JustifyMatcher: {
    justify_start: {
        key: string;
        value: string;
    };
    justify_end: {
        key: string;
        value: string;
    };
};
export declare const FlexMatcher: {
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
type FlexStyles = {
    [F in keyof typeof AlignMatcher as F]?: boolean;
} & {
    [F in FlexAlignType as `align_${F}`]?: boolean;
} & {
    [F in keyof typeof AlignSMatcher as F]?: boolean;
} & {
    [F in FlexAlignType as `alignSelf_${F}`]?: boolean;
} & {
    [F in keyof typeof JustifyMatcher as F]?: boolean;
} & {
    [F in FlexAlignType as `justify_${F}`]?: boolean;
} & {
    [N in Nums as `flex_${N}`]?: boolean;
} & {
    [N in Nums as `flexGrow_${N}`]?: boolean;
} & {
    flex: boolean;
    flexGrow: boolean;
    column: boolean;
    row: boolean;
    wrap: boolean;
    nowrap: boolean;
};
export default FlexStyles;
