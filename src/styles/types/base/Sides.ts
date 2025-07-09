export const sidesArr = ['l', 'r', 'b', 't', 'lt', 'lb', 'rt', 'rb', 'h', 'v'] as const;
type Sides = typeof sidesArr[number];

export const SideMatcher = {
    'l' : ['Left'],
    'r' : ['Right'],
    'b' : ['Bottom'],
    't' : ['Top'],
    'h' : ['Right', 'Left'],
    'v' : ['Top', 'Bottom']
}
export default Sides;