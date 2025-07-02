import Nums from "./Nums";

const WidthMatcher = {
    'border': 1,
}

export const BorderMatcher = {
    ...WidthMatcher,
}

type Sides = 'l' | 'r' | 'b' | 't' | 'lt' | 'lb' | 'lr' | 'rt' | 'rb' | 'bt' ;



type SidedRadius<S extends string, N extends number> = `radius_${S}_${N}`;
type SidedWidth<S extends string, N extends number> = `border_${S}_${N}`;

type BorderStyles = {
    [N in Nums as `border_${N}`]?: boolean
} & {
    [SR in SidedWidth<Sides,Nums>]?: boolean
} & {
    [N in Nums as `radius_${N}`]?: boolean
} & {
    [SR in SidedRadius<Sides,Nums>]?: boolean
}

export default BorderStyles;