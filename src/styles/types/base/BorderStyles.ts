import Nums from "./Nums";
import Sides, { SidesRadius } from "./Sides";

const WidthMatcher = {
    'border': {key: 'borderWidth', value: 1},
}

export const BorderMatcher = {
    ...WidthMatcher,
}


type SidedRadius<S extends string, N extends number> = `radius_${S}_${N}`;
type SidedWidth<S extends string, N extends number> = `border_${S}_${N}`;

type BorderStyles = {
    [N in Nums as `border_${N}`]?: boolean
} & {
    [SR in SidedWidth<Sides,Nums>]?: boolean
} & {
    [N in Nums as `radius_${N}`]?: boolean
} & {
    [SR in SidedRadius<SidesRadius,Nums>]?: boolean
}

export default BorderStyles;