export declare const sidesArr: readonly ["l", "r", "b", "t", "tl", "bl", "tr", "br", "h", "v"];
export declare const sidesRadius: readonly ["tl", "bl", "tr", "br"];
type Sides = typeof sidesArr[number];
export type SidesRadius = typeof sidesRadius[number];
export declare const SideMatcher: {
    l: string[];
    r: string[];
    b: string[];
    t: string[];
    h: string[];
    v: string[];
};
export default Sides;
