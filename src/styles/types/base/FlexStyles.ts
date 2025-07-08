import Nums from "./Nums";

type FlexAlignType =
  | 'center'
  | 'stretch'
  | 'baseline';

const AlignMatcher = {
    'align_start': {key: 'alignItems', value: 'flex-start'},
    'align_end': {key: 'alignItems', value: 'flex-start'}
}
const AlignSMatcher = {
    'alignSelf_start': {key: 'alignSelf', value: 'flex-start'},
    'alignSelf_end': {key: 'alignSelf', value: 'flex-start'}
}
const JustifyMatcher = {
    'justify_start': {key: 'justifyContent', value: 'flex-start'},
    'justify_end': {key: 'justifyContent', value: 'flex-start'}
}

const FMatcher = {
    'flex': {key: 'flex', value: 1},
    'flexGrow': {key: 'flexGrow', value: 1},
    'column': {key: 'flexDirection', value: 'column'},
    'row': {key: 'flexDirection', value: 'row'},
    'wrap': {key: 'flexWrap', value: 'wrap'},
    'nowrap ': {key: 'flexWrap', value: 'nowrap'},
}

export const FlexMatcher = {
    ...FMatcher,
    ...AlignMatcher,
    ...JustifyMatcher,
    ...AlignSMatcher,
}

type FlexStyles = {
    [F in keyof typeof AlignMatcher as F]?: boolean;
} & {
    [F in FlexAlignType as `align_${F}`]?: boolean
} & {
    [F in keyof typeof AlignSMatcher as F]?: boolean;
} & {
    [F in FlexAlignType as `alignSelf_${F}`]?: boolean
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
    column: boolean,
    row: boolean,
    wrap: boolean,
    nowrap: boolean,
}

export default FlexStyles;