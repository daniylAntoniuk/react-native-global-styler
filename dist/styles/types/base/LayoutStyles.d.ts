import Nums from "./Nums";
import Sides from "./Sides";
export declare const LayoutMatcher: {
    relative: {
        key: string;
        value: string;
    };
    absolute: {
        key: string;
        value: string;
    };
};
type SidedPadding<S extends string, N extends number> = `m${S}_${N}`;
type SidedMargin<S extends string, N extends number> = `p${S}_${N}`;
type LayoutStyles = {
    [N in Nums as `top_${N}`]?: boolean;
} & {
    [N in Nums as `bottom_${N}`]?: boolean;
} & {
    [N in Nums as `left_${N}`]?: boolean;
} & {
    [N in Nums as `right_${N}`]?: boolean;
} & {
    [N in Nums as `width_${N}`]?: boolean;
} & {
    [N in Nums as `height_${N}`]?: boolean;
} & {
    [N in Nums as `opacity_${N}`]?: boolean;
} & {
    [N in Nums as `zIndex_${N}`]?: boolean;
} & {
    [N in Nums as `m_${N}`]?: boolean;
} & {
    [N in Nums as `p_${N}`]?: boolean;
} & {
    [N in Nums as `gap_${N}`]?: boolean;
} & {
    [SP in SidedPadding<Sides, Nums>]?: boolean;
} & {
    [SM in SidedMargin<Sides, Nums>]?: boolean;
} & {
    absolute: boolean;
    relative: boolean;
};
export default LayoutStyles;
