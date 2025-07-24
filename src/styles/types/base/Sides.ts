export const sidesArr = ['l', 'r', 'b', 't', 'tl', 'bl', 'tr', 'br', 'h', 'v'] as const;
export const sidesRadius = ['tl', 'bl', 'tr', 'br'] as const;
type Sides = typeof sidesArr[number];
export type SidesRadius = typeof sidesRadius[number];

export const SideMatcher = {
    'l' : ['Left'],
    'r' : ['Right'],
    'b' : ['Bottom'],
    't' : ['Top'],
    'h' : ['Right', 'Left'],
    'v' : ['Top', 'Bottom']
}
export default Sides;