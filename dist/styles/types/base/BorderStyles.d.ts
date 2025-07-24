import Nums from "./Nums";
import Sides, { SidesRadius } from "./Sides";
export declare const BorderMatcher: {
    border: {
        key: string;
        value: number;
    };
};
type SidedRadius<S extends string, N extends number> = `radius_${S}_${N}`;
type SidedWidth<S extends string, N extends number> = `border_${S}_${N}`;
type BorderStyles = {
    [N in Nums as `border_${N}`]?: boolean;
} & {
    [SR in SidedWidth<Sides, Nums>]?: boolean;
} & {
    [N in Nums as `radius_${N}`]?: boolean;
} & {
    [SR in SidedRadius<SidesRadius, Nums>]?: boolean;
};
export default BorderStyles;
