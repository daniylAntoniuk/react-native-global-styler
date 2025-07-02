import Nums from "./Nums";

type FlexAlignType =
  | 'center'
  | 'stretch'
  | 'baseline';

const AlignMatcher = {
    'align_start': 'flex-start',
    'align_end': 'flex-end'
}
const JustifyMatcher = {
    'justify_start': 'flex-start',
    'justify_end': 'flex-end'
}

const FMatcher = {
    'flex': 1,
    'flexGrow': 1
}

export const FlexMatcher = {
    ...FMatcher,
    ...AlignMatcher,
    ...JustifyMatcher,
}

type FlexStyles = {
    [F in keyof typeof AlignMatcher as F]?: boolean;
} & {
    [F in FlexAlignType as `align_${F}`]?: boolean
} & {
    [F in keyof typeof JustifyMatcher as F]?: boolean;
} & {
    [F in FlexAlignType as `justify_${F}`]?: boolean
} & {
    [N in Nums as `flex_${N}`]?: boolean
} & {
    [N in Nums as `flexGrow_${N}`]?: boolean
} & {
    flex: boolean,
    flexGrow: boolean,
}

export default FlexStyles;