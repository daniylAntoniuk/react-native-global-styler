export declare const sidesArr: readonly ["l", "r", "b", "t", "lt", "lb", "rt", "rb", "h", "v"];
type Sides = typeof sidesArr[number];
export declare const SideMatcher: {
    l: string[];
    r: string[];
    b: string[];
    t: string[];
    h: string[];
    v: string[];
};
export default Sides;
