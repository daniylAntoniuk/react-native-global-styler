import Nums from "./Nums";

const LMatcher = {
    'relative': {key: 'position', value: 'relative'},
    'absolute': {key: 'position', value: 'absolute'},
}

export const LayoutMatcher = {
    ...LMatcher,
}

type LayoutStyles = {
    [N in Nums as `top_${N}`]?: boolean
} & {
    [N in Nums as `bottom_${N}`]?: boolean
} & {
    [N in Nums as `left_${N}`]?: boolean
} & {
    [N in Nums as `right_${N}`]?: boolean
} & {
    [N in Nums as `width_${N}`]?: boolean
} & {
    [N in Nums as `height_${N}`]?: boolean
} & {
    [N in Nums as `opacity_${N}`]?: boolean
} & {
    [N in Nums as `zIndex_${N}`]?: boolean
} & {
    absolute: boolean,
    relative: boolean,
}

export default LayoutStyles;

//TextStyles, ImageStyles, padding, margin