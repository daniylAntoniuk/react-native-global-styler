import Nums from "./Nums";

type FlexAlignType =
  | 'center'
  | 'stretch'
  | 'baseline';

const AlignMatcher = {
    'align_start': {key: 'alignItems', value: 'flex-start'},
    'align_end': {key: 'alignItems', value: 'flex-start'}
}
const JustifyMatcher = {
    'justify_start': {key: 'justifyContent', value: 'flex-start'},
    'justify_end': {key: 'justifyContent', value: 'flex-start'}
}

const FMatcher = {
    'flex': {key: 'flex', value: 1},
    'flexGrow': {key: 'flexGrow', value: 1},
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